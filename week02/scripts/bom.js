const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');


buttonElement.addEventListener('click', function () {
  if (inputElement.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = inputElement.value;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    listElement.appendChild(li);

    deleteButton.addEventListener('click', function (event) {
      listElement.removeChild(li);
      inputElement.focus();
    });

    inputElement.value = '';
  }
  inputElement.focus();

});

