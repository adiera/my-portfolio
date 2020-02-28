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

/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const greetings =
      ['Real Madrid is my favorite soccer team!', 'I speak two languages!', 'I am a first generation college student!',];

  // Pick a random fact.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
* Adds the message from /data to index page
 */
function getMessages() {
    fetch('/data').then(response => response.json()).then((data) => {
    Message = document.getElementById('data-container');
    });

    // Build the list of history entries.
    const historyEl = document.getElementById('history');
    data.history.forEach((line) => {
      historyEl.appendChild(createListElement(line));
    });
}
