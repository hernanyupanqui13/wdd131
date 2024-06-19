const nav = document.querySelector('#nav')
const menuButton = document.querySelector('#menu');


menuButton.addEventListener('click', () => {
  console.log('clicked');
  console.log(nav);
  console.log(menuButton);
	nav.classList.toggle('show');
	menuButton.classList.toggle('open');
});
