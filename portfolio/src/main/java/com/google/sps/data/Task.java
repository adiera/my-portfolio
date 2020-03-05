package com.google.sps.data;

public final class Task {
    
  private final String comment;
  private final long timestamp;
  private final String languageCode;

  public Task(String comment, long timestamp, String languageCode) {
    this.comment = comment;
    this.timestamp = timestamp;
    this.languageCode = languageCode;
  }
}