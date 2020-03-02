package com.google.sps.data;

public final class Task {
    
  private final String comment;
  private final long timestamp;

  public Task(String comment, long timestamp) {
    this.comment = comment;
    this.timestamp = timestamp;
  }
}