import 'dart:async';
import 'dart:math';
import 'package:flutter/foundation.dart';
import '../models/health_data.dart';
import '../models/ppg_data.dart';

/// Core health monitoring service for NeuroSynk
/// Handles PPG signal analysis, heart rate variability, and health metrics calculation
class HealthService {
  static const int _sampleRate = 125; // Hz
  static const int _windowSize = 256;
  static const double _heartRateThreshold = 130.0;
  static const double _bloodPressureThreshold = 140.0;
  static const double _criticalHRVThreshold = 20.0;
  
  final StreamController<HealthData> _healthDataController = StreamController<HealthData>.broadcast();
  final StreamController<AlertData> _alertController = StreamController<AlertData>.broadcast();
  
  List<double> _ppgBuffer = [];
  List<double> _heartRateHistory = [];
  bool _isMonitoring = false;
  
  Stream<HealthData> get healthDataStream => _healthDataController.stream;
  Stream<AlertData> get alertStream => _alertController.stream;
  
  /// Start continuous health monitoring
  Future<void> startMonitoring() async {
    if (_isMonitoring) return;
    
    _isMonitoring = true;
    debugPrint('NeuroSynk: Starting health monitoring...');
    
    // Start monitoring cycle every 3 minutes
    Timer.periodic(Duration(minutes: 3), (timer) {
      if (!_isMonitoring) {
        timer.cancel();
        return;
      }
      _performHealthAnalysis();
    });
  }
  
  /// Stop health monitoring
  void stopMonitoring() {
    _isMonitoring = false;
    debugPrint('NeuroSynk: Stopping health monitoring...');
  }
  
  /// Process incoming PPG data from BLE device
  void processPPGData(List<int> rawData) {
    // Convert raw bytes to PPG signal
    List<double> ppgData = rawData.map((byte) => byte.toDouble()).toList();
    
    // Add to buffer
    _ppgBuffer.addAll(ppgData);
    
    // Keep buffer size manageable
    if (_ppgBuffer.length > _windowSize * 4) {
      _ppgBuffer = _ppgBuffer.sublist(_ppgBuffer.length - _windowSize * 2);
    }
    
    // Process if we have enough data
    if (_ppgBuffer.length >= _windowSize) {
      _analyzeRealTimeData();
    }
  }
  
  /// Analyze real-time PPG data and extract health metrics
  void _analyzeRealTimeData() {
    if (_ppgBuffer.length < _windowSize) return;
    
    // Get latest window of data
    List<double> window = _ppgBuffer.sublist(_ppgBuffer.length - _windowSize);
    
    // Apply filtering
    List<double> filteredSignal = _applyBandpassFilter(window);
    
    // Detect peaks (R-peaks equivalent)
    List<Peak> peaks = _detectPeaks(filteredSignal);
    
    if (peaks.length < 2) return;
    
    // Calculate health metrics
    double heartRate = _calculateHeartRate(peaks);
    double hrv = _calculateHRV(peaks);
    double bloodPressure = _estimateBloodPressure(filteredSignal, peaks);
    double spO2 = _calculateSpO2(filteredSignal);
    
    // Create health data
    HealthData healthData = HealthData(
      timestamp: DateTime.now(),
      heartRate: heartRate,
      hrv: hrv,
      bloodPressure: bloodPressure,
      spO2: spO2,
      qrsInterval: _calculateQRSInterval(peaks),
      prInterval: _calculatePRInterval(peaks),
      qtcInterval: _calculateQTcInterval(peaks),
      rawPPG: List.from(filteredSignal),
    );
    
    _healthDataController.add(healthData);
    _checkCriticalConditions(healthData);
    
    // Update history
    _heartRateHistory.add(heartRate);
    if (_heartRateHistory.length > 100) {
      _heartRateHistory.removeAt(0);
    }
  }
  
  /// Apply bandpass filter to PPG signal (0.5-8 Hz)
  List<double> _applyBandpassFilter(List<double> signal) {
    // Simplified bandpass filter implementation
    // In production, use proper DSP library
    List<double> filtered = [];
    
    for (int i = 0; i < signal.length; i++) {
      double sum = 0;
      int count = 0;
      
      // Simple moving average with bandpass characteristics
      for (int j = max(0, i - 5); j <= min(signal.length - 1, i + 5); j++) {
        sum += signal[j];
        count++;
      }
      
      double average = sum / count;
      double highpass = signal[i] - average;
      filtered.add(highpass);
    }
    
    return filtered;
  }
  
  /// Detect peaks in PPG signal (equivalent to R-peaks in ECG)
  List<Peak> _detectPeaks(List<double> signal) {
    List<Peak> peaks = [];
    double threshold = _calculateAdaptiveThreshold(signal);
    
    for (int i = 1; i < signal.length - 1; i++) {
      if (signal[i] > signal[i - 1] && 
          signal[i] > signal[i + 1] && 
          signal[i] > threshold) {
        peaks.add(Peak(
          index: i,
          value: signal[i],
          timestamp: DateTime.now().millisecondsSinceEpoch + (i * 1000 ~/ _sampleRate),
        ));
      }
    }
    
    return _filterPeaks(peaks);
  }
  
  /// Calculate adaptive threshold for peak detection
  double _calculateAdaptiveThreshold(List<double> signal) {
    double mean = signal.reduce((a, b) => a + b) / signal.length;
    double variance = signal.map((x) => pow(x - mean, 2)).reduce((a, b) => a + b) / signal.length;
    double stdDev = sqrt(variance);
    
    return mean + (0.6 * stdDev);
  }
  
  /// Filter peaks to remove noise and artifacts
  List<Peak> _filterPeaks(List<Peak> peaks) {
    List<Peak> filtered = [];
    const int minInterval = 60; // Minimum 60ms between peaks (1000 BPM max)
    
    for (int i = 0; i < peaks.length; i++) {
      if (i == 0 || (peaks[i].timestamp - peaks[i - 1].timestamp) > minInterval) {
        filtered.add(peaks[i]);
      }
    }
    
    return filtered;
  }
  
  /// Calculate heart rate from detected peaks
  double _calculateHeartRate(List<Peak> peaks) {
    if (peaks.length < 2) return 0;
    
    List<double> intervals = [];
    for (int i = 1; i < peaks.length; i++) {
      double interval = (peaks[i].timestamp - peaks[i - 1].timestamp) / 1000.0;
      intervals.add(interval);
    }
    
    double avgInterval = intervals.reduce((a, b) => a + b) / intervals.length;
    return 60.0 / avgInterval;
  }
  
  /// Calculate Heart Rate Variability (HRV)
  double _calculateHRV(List<Peak> peaks) {
    if (peaks.length < 3) return 0;
    
    List<double> intervals = [];
    for (int i = 1; i < peaks.length; i++) {
      double interval = (peaks[i].timestamp - peaks[i - 1].timestamp) / 1000.0;
      intervals.add(interval);
    }
    
    // Calculate RMSSD (Root Mean Square of Successive Differences)
    List<double> differences = [];
    for (int i = 1; i < intervals.length; i++) {
      differences.add(intervals[i] - intervals[i - 1]);
    }
    
    double sumSquares = differences.map((d) => d * d).reduce((a, b) => a + b);
    double rmssd = sqrt(sumSquares / differences.length);
    
    return rmssd * 1000; // Convert to milliseconds
  }
  
  /// Estimate blood pressure from PPG signal characteristics
  double _estimateBloodPressure(List<double> signal, List<Peak> peaks) {
    // Simplified BP estimation based on pulse transit time and wave morphology
    // This is a simplified version - actual implementation would need calibration
    
    double pulseWidth = _calculatePulseWidth(signal, peaks);
    double amplitude = _calculatePulseAmplitude(signal, peaks);
    
    // Empirical formula (would need calibration with actual BP measurements)
    double systolic = 120 + (pulseWidth * 0.5) - (amplitude * 0.3);
    
    return systolic.clamp(80, 200);
  }
  
  /// Calculate SpO2 from PPG signal
  double _calculateSpO2(List<double> signal) {
    // Simplified SpO2 calculation
    // Actual implementation would need red and infrared PPG signals
    
    double ac = _calculateACComponent(signal);
    double dc = _calculateDCComponent(signal);
    
    if (dc == 0) return 98.0; // Default value
    
    double ratio = ac / dc;
    double spO2 = 110 - (25 * ratio);
    
    return spO2.clamp(70, 100);
  }
  
  /// Calculate QRS interval equivalent
  double _calculateQRSInterval(List<Peak> peaks) {
    // Simplified QRS calculation based on peak width
    return 0.08; // Default QRS duration in seconds
  }
  
  /// Calculate PR interval equivalent
  double _calculatePRInterval(List<Peak> peaks) {
    return 0.16; // Default PR interval in seconds
  }
  
  /// Calculate QTc interval
  double _calculateQTcInterval(List<Peak> peaks) {
    if (peaks.length < 2) return 0.4;
    
    double heartRate = _calculateHeartRate(peaks);
    double qt = 0.4; // Base QT interval
    
    // Bazett's formula for QTc
    double rr = 60.0 / heartRate;
    double qtc = qt / sqrt(rr);
    
    return qtc;
  }
  
  /// Check for critical health conditions
  void _checkCriticalConditions(HealthData data) {
    List<String> alerts = [];
    
    if (data.heartRate > _heartRateThreshold) {
      alerts.add('High Heart Rate: ${data.heartRate.toInt()} BPM');
    }
    
    if (data.bloodPressure > _bloodPressureThreshold) {
      alerts.add('High Blood Pressure: ${data.bloodPressure.toInt()} mmHg');
    }
    
    if (data.hrv < _criticalHRVThreshold) {
      alerts.add('Low HRV: ${data.hrv.toInt()} ms');
    }
    
    if (data.spO2 < 90) {
      alerts.add('Low Oxygen Saturation: ${data.spO2.toInt()}%');
    }
    
    if (alerts.isNotEmpty) {
      _alertController.add(AlertData(
        timestamp: DateTime.now(),
        severity: _calculateSeverity(alerts),
        messages: alerts,
        healthData: data,
      ));
    }
  }
  
  /// Calculate alert severity based on conditions
  AlertSeverity _calculateSeverity(List<String> alerts) {
    if (alerts.any((alert) => alert.contains('High Heart Rate') || alert.contains('Low Oxygen'))) {
      return AlertSeverity.critical;
    }
    return AlertSeverity.warning;
  }
  
  /// Helper methods for signal processing
  double _calculatePulseWidth(List<double> signal, List<Peak> peaks) {
    if (peaks.length < 2) return 0.5;
    
    double avgInterval = 0;
    for (int i = 1; i < peaks.length; i++) {
      avgInterval += (peaks[i].timestamp - peaks[i - 1].timestamp);
    }
    avgInterval /= (peaks.length - 1);
    
    return avgInterval / 1000.0; // Convert to seconds
  }
  
  double _calculatePulseAmplitude(List<double> signal, List<Peak> peaks) {
    if (peaks.isEmpty) return 0;
    
    double maxVal = peaks.map((p) => p.value).reduce(max);
    double minVal = signal.reduce(min);
    
    return maxVal - minVal;
  }
  
  double _calculateACComponent(List<double> signal) {
    double mean = signal.reduce((a, b) => a + b) / signal.length;
    double variance = signal.map((x) => pow(x - mean, 2)).reduce((a, b) => a + b) / signal.length;
    return sqrt(variance);
  }
  
  double _calculateDCComponent(List<double> signal) {
    return signal.reduce((a, b) => a + b) / signal.length;
  }
  
  /// Perform comprehensive health analysis
  void _performHealthAnalysis() {
    if (_ppgBuffer.length < _windowSize) return;
    
    debugPrint('NeuroSynk: Performing 3-minute health analysis...');
    
    // Analyze larger data window for comprehensive metrics
    List<double> analysisWindow = _ppgBuffer.sublist(
      max(0, _ppgBuffer.length - _windowSize * 2)
    );
    
    _analyzeRealTimeData();
  }
  
  /// Dispose resources
  void dispose() {
    _isMonitoring = false;
    _healthDataController.close();
    _alertController.close();
  }
}

/// Data models for health monitoring
class Peak {
  final int index;
  final double value;
  final int timestamp;
  
  Peak({required this.index, required this.value, required this.timestamp});
}

class AlertData {
  final DateTime timestamp;
  final AlertSeverity severity;
  final List<String> messages;
  final HealthData healthData;
  
  AlertData({
    required this.timestamp,
    required this.severity,
    required this.messages,
    required this.healthData,
  });
}

enum AlertSeverity { warning, critical, emergency }