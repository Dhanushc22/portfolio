package com.healthwhisper;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

/**
 * Main Activity for HealthWhisper - AI-Powered Medical Assistant
 * Provides navigation to all core features
 */
public class MainActivity extends AppCompatActivity {

    private CardView xrayCard, voiceCard, bloodReportCard, tabletCard;
    private Button emergencyButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        initializeViews();
        setupClickListeners();
    }

    private void initializeViews() {
        xrayCard = findViewById(R.id.xray_card);
        voiceCard = findViewById(R.id.voice_card);
        bloodReportCard = findViewById(R.id.blood_report_card);
        tabletCard = findViewById(R.id.tablet_card);
        emergencyButton = findViewById(R.id.emergency_button);
    }

    private void setupClickListeners() {
        xrayCard.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, XrayAnalysisActivity.class);
            startActivity(intent);
        });

        voiceCard.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, VoiceConsultationActivity.class);
            startActivity(intent);
        });

        bloodReportCard.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, BloodReportActivity.class);
            startActivity(intent);
        });

        tabletCard.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, TabletAnalyzerActivity.class);
            startActivity(intent);
        });

        emergencyButton.setOnClickListener(v -> {
            // Emergency contact functionality
            Intent intent = new Intent(MainActivity.this, EmergencyActivity.class);
            startActivity(intent);
        });
    }
}