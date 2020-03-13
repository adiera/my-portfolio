// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;


public final class FindMeetingQuery {
    public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
      long requestDuration = request.getDuration();
      Collection<String> requestAttendees = request.getAttendees();
      int START_OF_DAY = TimeRange.getTimeInMinutes(0, 0);
      int END_OF_DAY = TimeRange.getTimeInMinutes(23, 59);
      int WHOLE_DAY = TimeRange.getTimeInMinutes(0,24 * 60);  
      Collection<TimeRange> validRanges = new ArrayList<TimeRange>();
      
      Collection<TimeRange> invalidRanges = new ArrayList<TimeRange>();
      //Will fill invalidRanges with proper invalid ranges due to double scheduling then sort at end.
      for(Event e : events) {
          TimeRange eRange = e.getWhen();
          Collection<String> eAttendees = e.getAttendees();
          if(attendeesCheck(requestAttendees, eAttendees)) {
              invalidRanges.add(eRange);
          }
      }
      Collections.sort(invalidRanges, TimeRange.ORDER_BY_START);
      
      for(TimeRange tR : invalidRanges) {
          int rangeStart = tR.start();
          int rangeEnd = tR.end();
          if(START_OF_DAY + requestDuration <= rangeStart) {
              TimeRange range = TimeRange.fromStartEnd(START_OF_DAY, rangeStart, false);
              validRanges.add(range);
          }
          START_OF_DAY = Math.max(rangeEnd, START_OF_DAY);
      }

      if(START_OF_DAY + requestDuration <= WHOLE_DAY) {
          TimeRange backRange = TimeRange.fromStartEnd(START_OF_DAY, WHOLE_DAY, false);
          validRanges.add(backRange);
      }

      return validRanges;

      }

    // Checks if there is at least one attendee from request.getAttendees() collection in event attendees collection.
    public Boolean attendeesCheck(Collection<String> attendeesList1, Collection<String> attendeesList2) {
        for(String a : attendeesList1) {
            if(attendeesList2.contains(a)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}






