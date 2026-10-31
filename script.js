const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
  const isOpen = menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});