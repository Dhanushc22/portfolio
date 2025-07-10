package com.binarybox.services;

import android.content.Context;
import android.net.Uri;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Core file conversion service for BinaryBox
 * Handles bidirectional conversion between files and binary strings
 */
public class FileConverter {
    
    private static final int BUFFER_SIZE = 8192;
    private Context context;
    
    public FileConverter(Context context) {
        this.context = context;
    }
    
    /**
     * Convert any file to binary string representation
     * @param fileUri URI of the file to convert
     * @return Binary string representation of the file
     */
    public String fileToBinary(Uri fileUri) throws IOException {
        StringBuilder binaryString = new StringBuilder();
        
        try (InputStream inputStream = context.getContentResolver().openInputStream(fileUri);
             BufferedInputStream bufferedInputStream = new BufferedInputStream(inputStream)) {
            
            byte[] buffer = new byte[BUFFER_SIZE];
            int bytesRead;
            
            while ((bytesRead = bufferedInputStream.read(buffer)) != -1) {
                for (int i = 0; i < bytesRead; i++) {
                    // Convert each byte to 8-bit binary string
                    String binaryByte = String.format("%8s", 
                        Integer.toBinaryString(buffer[i] & 0xFF)).replace(' ', '0');
                    binaryString.append(binaryByte);
                }
            }
        }
        
        return binaryString.toString();
    }
    
    /**
     * Convert binary string back to file
     * @param binaryString Binary representation of the file
     * @param fileName Name for the output file
     * @param outputDir Directory to save the file
     * @return File object of the created file
     */
    public File binaryToFile(String binaryString, String fileName, File outputDir) throws IOException {
        // Validate binary string
        if (!isValidBinaryString(binaryString)) {
            throw new IllegalArgumentException("Invalid binary string format");
        }
        
        // Ensure binary string length is multiple of 8
        if (binaryString.length() % 8 != 0) {
            throw new IllegalArgumentException("Binary string length must be multiple of 8");
        }
        
        File outputFile = new File(outputDir, fileName);
        
        try (FileOutputStream fileOutputStream = new FileOutputStream(outputFile);
             BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream)) {
            
            // Process binary string in chunks of 8 bits
            for (int i = 0; i < binaryString.length(); i += 8) {
                String binaryByte = binaryString.substring(i, i + 8);
                int byteValue = Integer.parseInt(binaryByte, 2);
                bufferedOutputStream.write(byteValue);
            }
            
            bufferedOutputStream.flush();
        }
        
        return outputFile;
    }
    
    /**
     * Validate if string contains only binary characters
     * @param binaryString String to validate
     * @return true if valid binary string, false otherwise
     */
    private boolean isValidBinaryString(String binaryString) {
        return binaryString.matches("[01]+");
    }
    
    /**
     * Get file size from binary string
     * @param binaryString Binary representation
     * @return File size in bytes
     */
    public long getBinarySizeInBytes(String binaryString) {
        return binaryString.length() / 8;
    }
    
    /**
     * Validate file integrity by comparing checksums
     * @param originalFile Original file
     * @param reconstructedFile Reconstructed file
     * @return true if files are identical, false otherwise
     */
    public boolean validateFileIntegrity(File originalFile, File reconstructedFile) {
        try {
            if (originalFile.length() != reconstructedFile.length()) {
                return false;
            }
            
            byte[] originalBytes = Files.readAllBytes(originalFile.toPath());
            byte[] reconstructedBytes = Files.readAllBytes(reconstructedFile.toPath());
            
            return java.util.Arrays.equals(originalBytes, reconstructedBytes);
            
        } catch (IOException e) {
            return false;
        }
    }
    
    /**
     * Convert file to binary with progress callback
     * @param fileUri URI of the file
     * @param progressCallback Callback to report progress
     * @return Binary string representation
     */
    public String fileToBinaryWithProgress(Uri fileUri, ProgressCallback progressCallback) throws IOException {
        StringBuilder binaryString = new StringBuilder();
        long totalSize = getFileSize(fileUri);
        long processedSize = 0;
        
        try (InputStream inputStream = context.getContentResolver().openInputStream(fileUri);
             BufferedInputStream bufferedInputStream = new BufferedInputStream(inputStream)) {
            
            byte[] buffer = new byte[BUFFER_SIZE];
            int bytesRead;
            
            while ((bytesRead = bufferedInputStream.read(buffer)) != -1) {
                for (int i = 0; i < bytesRead; i++) {
                    String binaryByte = String.format("%8s", 
                        Integer.toBinaryString(buffer[i] & 0xFF)).replace(' ', '0');
                    binaryString.append(binaryByte);
                }
                
                processedSize += bytesRead;
                int progress = (int) ((processedSize * 100) / totalSize);
                progressCallback.onProgress(progress);
            }
        }
        
        return binaryString.toString();
    }
    
    private long getFileSize(Uri fileUri) throws IOException {
        try (InputStream inputStream = context.getContentResolver().openInputStream(fileUri)) {
            return inputStream.available();
        }
    }
    
    /**
     * Interface for progress reporting
     */
    public interface ProgressCallback {
        void onProgress(int percentage);
    }
}