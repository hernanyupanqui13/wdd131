
const nav = document.querySelector('#nav')
const menuButton = document.querySelector('#menu');


menuButton.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuButton.classList.toggle('open');
});
