// Get the current year
const currentYear = new Date().getFullYear();

// Get the span element with the ID "currentyear"
const yearSpan = document.getElementById('currentyear');

// Insert the current year into the span element
yearSpan.textContent = currentYear;

// Get the span element with the ID "lastModified"
const lastModifiedSpan = document.getElementById('lastModified');

// Insert the document.lastModified value into the span element
lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
