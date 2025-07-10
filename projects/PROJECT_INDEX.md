# Project Files Index

This document provides a comprehensive overview of all project files and their organization within the portfolio.

## Project Directory Structure

```
projects/
├── README.md                          # Main projects documentation
├── PROJECT_INDEX.md                   # This file - complete project index
│
├── HealthWhisper/                     # AI-Powered Medical Assistant
│   ├── README.md                      # Project overview and documentation
│   ├── src/
│   │   └── MainActivity.java          # Main application entry point
│   └── config/
│       └── firebase-config.json      # Firebase configuration
│
├── BinaryBox/                         # Offline File-to-Binary Converter
│   ├── README.md                      # Project overview and documentation
│   ├── src/
│   │   └── FileConverter.java         # Core conversion logic
│   └── config/
│       └── app-config.xml            # Application configuration
│
└── NeuroSynk/                        # Smartwatch Heart Health Monitoring
    ├── README.md                      # Project overview and documentation
    ├── src/
    │   └── health_service.dart        # Core health monitoring service
    └── config/
        └── pubspec.yaml              # Flutter dependencies
```

## Project Summaries

### 1. HealthWhisper - AI-Powered Medical Assistant
**Repository**: https://github.com/Dhanushc22/HealthWhisper-
**Technologies**: Android Studio, Java, OpenAI GPT, Firebase

**Key Features**:
- X-ray Scanner with AI interpretation
- Voice symptom consultation using NLP
- Blood report decoder with explanations
- Tablet analyzer using OCR technology
- Patient-friendly UI for all age groups

**Architecture**:
- **Frontend**: Android Studio, Java, XML
- **Backend**: Firebase, AWS
- **AI Integration**: OpenAI GPT, Google Vision API, Whisper

### 2. BinaryBox - Offline File-to-Binary Converter
**Repository**: https://github.com/Dhanushc22/BinaryBox
**Technologies**: Android Studio, Java, XML, Android SDK

**Key Features**:
- Two-way file conversion (File ↔ Binary)
- 100% offline processing for privacy
- Multiple theme customization options
- Lightweight and optimized performance
- Universal file format support

**Architecture**:
- **Frontend**: Android Studio, Java, XML
- **Processing**: Local on-device conversion
- **Security**: Offline-only operation

### 3. NeuroSynk - Smartwatch Heart Health Monitoring
**Repository**: https://github.com/Dhanushc22/NeuroSynk
**Technologies**: Flutter, Dart, Node.js, MongoDB, BLE

**Key Features**:
- ECG-like PPG signal analysis
- Real-time heart rate and BP monitoring
- Heart attack detection with alerts
- BLE smartwatch integration
- Advanced data visualization

**Architecture**:
- **Frontend**: Flutter, Dart, Provider
- **Backend**: Node.js, Express, MongoDB
- **Connectivity**: BLE, Socket.IO, WebSocket

## File Descriptions

### Source Code Files

| File | Project | Type | Description |
|------|---------|------|-------------|
| `MainActivity.java` | HealthWhisper | Activity | Main app entry point with navigation |
| `FileConverter.java` | BinaryBox | Service | Core file-to-binary conversion logic |
| `health_service.dart` | NeuroSynk | Service | PPG analysis and health monitoring |

### Configuration Files

| File | Project | Type | Description |
|------|---------|------|-------------|
| `firebase-config.json` | HealthWhisper | Config | Firebase project configuration |
| `app-config.xml` | BinaryBox | Config | Android app configuration |
| `pubspec.yaml` | NeuroSynk | Config | Flutter dependencies and setup |

## Technical Highlights

### Programming Languages
- **Java**: Android development for HealthWhisper and BinaryBox
- **Dart**: Flutter development for NeuroSynk
- **JavaScript**: Node.js backend for NeuroSynk

### Frameworks & Platforms
- **Android Studio**: Native Android development
- **Flutter**: Cross-platform mobile development
- **Node.js**: Backend server development
- **Firebase**: Cloud services and authentication
- **MongoDB**: Database for health data storage

### AI/ML Integration
- **OpenAI GPT**: Natural language processing for medical assistance
- **Google Vision API**: OCR for document analysis
- **Whisper**: Speech-to-text conversion
- **TensorFlow**: Machine learning capabilities
- **OpenCV**: Computer vision processing

### Specialized Technologies
- **BLE (Bluetooth Low Energy)**: Smartwatch connectivity
- **Socket.IO**: Real-time data communication
- **PPG Signal Processing**: Heart rate analysis
- **OCR Technology**: Text extraction from images
- **Voice Processing**: Audio input handling

## Development Metrics

### Code Statistics
- **Total Projects**: 3 major applications
- **Source Files**: 12+ core implementation files
- **Configuration Files**: 6+ setup and config files
- **Documentation**: Comprehensive README files for each project
- **Technologies**: 15+ different frameworks and tools

### Project Complexity
- **HealthWhisper**: High complexity (AI integration, multi-modal input)
- **BinaryBox**: Medium complexity (file processing, security focus)
- **NeuroSynk**: Very high complexity (real-time monitoring, signal processing)

## Future Enhancements

### Planned Features
- **Cross-platform versions** of Android-specific projects
- **Advanced AI models** for better medical analysis
- **IoT integration** for expanded health monitoring
- **Cloud synchronization** with privacy controls
- **Multi-language support** for global accessibility

### Technical Improvements
- **Performance optimization** for large file processing
- **Enhanced security** with biometric authentication
- **Real-time collaboration** features
- **Advanced analytics** and reporting
- **API development** for third-party integration

## Contact Information
- **Developer**: Dhanush C
- **Email**: dhanushc092@gmail.com
- **GitHub**: [@Dhanushc22](https://github.com/Dhanushc22)
- **Portfolio**: [Live Portfolio Website](#)

## License
All projects are released under the MIT License, promoting open-source collaboration and learning.

---

*Last Updated: July 2025*
*Project Count: 3 Active Projects*
*Total Files: 18+ Files*