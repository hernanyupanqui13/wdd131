/**
 * Adds an event listener to the button element and handles the logic when the button is clicked.
 */
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener('click', function () {
  if (inputElement.value.trim() !== '') {
    displayList(inputElement.value);
    chaptersArray.push(inputElement.value);
    setChapterList();
    inputElement.value = '';
    inputElement.focus();
  }
});

/**
 * Retrieves the chapter list from local storage or initializes an empty array if it doesn't exist.
 */
let chaptersArray = getChapterList() || [];

/**
 * Iterates through the chaptersArray and displays each chapter in the list.
 */
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

/**
 * Displays a chapter in the list.
 * @param {string} inputValue - The value of the chapter to be displayed.
 */
function displayList(inputValue) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = inputValue;
  deleteButton.textContent = '❌';
  li.appendChild(deleteButton);
  listElement.appendChild(li);

  deleteButton.addEventListener('click', function (event) {
    listElement.removeChild(li);
    inputElement.focus();
    deleteChapter(li.textContent);
  });
}

/**
 * Sets the chapter list in local storage.
 */
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

/**
 * Retrieves the chapter list from local storage.
 * @returns {Array} - The chapter list retrieved from local storage.
 */
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

/**
 * Deletes a chapter from the chapter list in the localStorage.
 * @param {string} chapter - The chapter to be deleted.
 */
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
