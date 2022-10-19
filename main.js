const navOpen = document.getElementById('humburger-btn')
const navClose = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobile-nav');

function showNavbar() {
    mobileNav.classList.remove('hidden');
    navOpen.classList.add('hidden');
  }

function hideNavbar() {
    mobileNav.classList.add('hidden');
    navOpen.classList.remove('hidden');
  }

navOpen.addEventListener('click', showNavbar);
navClose.addEventListener('click', hideNavbar);