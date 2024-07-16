
// ------------------------------------------------------------------
// NOTES FEATURE
// ------------------------------------------------------------------
const titleElem = document.querySelector("#title");
const noteElem = document.querySelector("#note");
const notesContainer = document.querySelector("#notes-container");


// Load user data from local storage
let notesData = JSON.parse(localStorage.getItem("notesData"));
if(notesData === undefined || notesData === null || notesData === "") {
  notesData = []
}
notesData.forEach(note => createNoteElement(note.id, note.title, note.content));


// Save user data to local storage
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  note = {
    id: Date.now(),
    title: titleElem.value,
    content: noteElem.value,
  };

  notesData.push(note);
  localStorage.setItem("notesData", JSON.stringify(notesData));
  renderNotes();
  clearFormData();
});



// ------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------

/**
 * Creates a note element in html and appends it to the notesContainer
 * @param {number} id 
 * @param {string} title 
 * @param {string} content 
 */
function createNoteElement(id, title, content) {
  const noteItemElem = document.createElement("div");
  noteItemElem.classList.add("note-item");
  noteItemElem.innerHTML = `
    <h3>${title}</h3> 
    <p>${content}</p>
  `;
  const smallElem = document.createElement("small");
  const deleteElem = document.createElement("a");
  deleteElem.classList.add("deleteBtn");
  deleteElem.textContent = "Delete";
  deleteElem.addEventListener("click", () => {
    notesData = notesData.filter(x => x.id !== id);
    localStorage.setItem("notesData", JSON.stringify(notesData));
    renderNotes();
  });
  smallElem.appendChild(deleteElem);
  noteItemElem.appendChild(smallElem);
  notesContainer.appendChild(noteItemElem);
}

/**
 * Renders all the notes saved in the notesData variable
 */
function renderNotes() {
  notesContainer.innerHTML = "";
  notesData.forEach(note => createNoteElement(note.id, note.title, note.content));
}

/**
 * Clears the form data in the html element
 */
function clearFormData() {
  titleElem.value = "";
  noteElem.value = "";
}