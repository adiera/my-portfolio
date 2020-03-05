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
* Fetches list of all comments
 */
function getComments() {
    
    fetch('/data').then(response => response.json()).then((data) => {
        
    // Build the list of history entries.
    const commentHistory = document.getElementById('history');
    data.forEach((line) => {
        console.log(line);
        commentHistory.appendChild(createListElement(line));
    });
  });

}

/** Creates an <li> element containing text. */
function createListElement(text) {

  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;

}

function requestTranslation() {
        const dataCont = document.getElementById('data-cont');
        const languageCode = document.getElementById('languageCode').value;   

        const params = new URLSearchParams();
        params.append('languageCode', languageCode);

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/data' + params.toString()).then(response => response.json()).then((comList)=> {
            const comListElement = document.getElementById('data-container');
            comList.forEach(line) => {
                comListElement.appendChild(createListElement));
            });
        });
      }