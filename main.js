const navOpen = document.getElementById('humburger-btn');
const navClose = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobile-nav');

const SpeakerInformation = [
  {
    id: 0,
    name: 'Mustafa Ali',
    description: 'Mustafa Ali',
    description1: 'Ali have been into web development for 10 years and wants to share his knowledge in this filed.',
    image: './img/speaker_02.png',
  },
  {
    id: 1,
    name: 'Ali Mustafa',
    description: 'Ali Mustafa',
    description1: 'Mustafa have been into web development for 10 years and wants to share his knowledge in this filed.',
    image: './img/speaker_03.png',
  },
  {
    id: 2,
    name: 'Muzaffer Dler',
    description: 'Muzaffer Dler',
    description1: 'Dler have been into web development for 10 years and wants to share his knowledge in this filed.',
    image: './img/speaker_04.png',
  },
  {
    id: 3,
    name: 'Shirin Nadim',
    description: 'Shirin Nadim',
    description1: 'Nadmin have been into web development for 10 years and wants to share his knowledge in this filed.',
    image: './img/speaker_05.png',
  },
  {
    id: 4,
    name: 'Rebaz Osman',
    description: 'Rebaz Osman',
    description1: 'Osman have been into web development for 10 years and wants to share his knowledge in this filed.',
    image: './img/speaker_06.png',
  },
  {
    id: 5,
    name: 'Siroz Taib',
    description: 'Siroz Taib',
    description1: 'Taib have been into web development for 10 years and wants to share his knowledge in this filed.',
    image: './img/speaker_02.png',
  },
];

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