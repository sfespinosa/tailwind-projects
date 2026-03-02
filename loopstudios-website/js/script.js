const hamburgerButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

hamburgerButton.addEventListener('click', navToggle);

function navToggle() {
  hamburgerButton.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}