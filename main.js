const navOpen = document.getElementById('humburger-btn');
const navClose = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobile-nav');
const speakersCon = document.getElementById('speakers-con');
const speakerBtnmore = document.getElementById('speaker-btn-more');
const speakerBtnless = document.getElementById('speaker-btn-less');

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
    name: 'Shayma Tahsin',
    description: 'Shayma Tahsin',
    description1: 'Tahsin have been into web development for 10 years and wants to share his knowledge in this filed.',
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

function showMore() {
  const hiddenSpeaker = document.querySelectorAll('.display-off');
  hiddenSpeaker.forEach((data) => data.classList.remove('hidden'));
  speakerBtnmore.classList.add('hidden');
  speakerBtnless.classList.remove('hidden');
}

function showLess() {
  const hiddenSpeaker = document.querySelectorAll('.display-off');
  hiddenSpeaker.forEach((data) => data.classList.add('hidden'));
  speakerBtnmore.classList.remove('hidden');
  speakerBtnless.classList.add('hidden');
}

function LoadSpeakers() {
  let counter;

  for (counter = 0; counter < SpeakerInformation.length; counter += 1) {
    if (counter < 2) {
      speakersCon.innerHTML += `
            <div class="speaker">
                <div class="img-container-speaker">
                    <img src=${SpeakerInformation[counter].image} alt="">
                </div>
                <div class="speaker-content">
                    <h2>${SpeakerInformation[counter].name}</h2>
                    <p class="speaker-description">${SpeakerInformation[counter].description}</p>
                    <hr>
                    <p class="speaker-description2">${SpeakerInformation[counter].description1}</p>
                </div>
            </div>`;
    } else {
      speakersCon.innerHTML += `
            <div class="speaker display-off hidden">
                <div class="img-container-speaker">
                    <img src=${SpeakerInformation[counter].image} alt="">
                </div>
                <div class="speaker-content">
                    <h2>${SpeakerInformation[counter].name}</h2>
                    <p class="speaker-description">${SpeakerInformation[counter].description}</p>
                    <hr>
                    <p class="speaker-description2">${SpeakerInformation[counter].description1}</p>
                </div>
            </div>`;
    }
  }
}

document.addEventListener('DOMContentLoaded', LoadSpeakers, false);
navOpen.addEventListener('click', showNavbar);
navClose.addEventListener('click', hideNavbar);
speakerBtnmore.addEventListener('click', showMore);
speakerBtnless.addEventListener('click', showLess);