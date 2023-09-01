const hamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});
