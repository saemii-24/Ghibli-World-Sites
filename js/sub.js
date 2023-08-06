import characters from '../data/character.js'


/*youtube API*/
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '70NhEBzLKU8',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: '70NhEBzLKU8'
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

/*youtube_popup*/
const closePopup = document.getElementById("close");
const openPopup = document.getElementById("play");
const popup = document.querySelector('#movie_video .full_inner');

openPopup.addEventListener('click', function () {
  popup.classList.add('active');
  openPopup.innerText = ('stop_circle');
});

closePopup.addEventListener('click', function () {
  popup.classList.remove('active');
  openPopup.innerText = ('play_circle');
});


/*scrollbar*/
const scrollBar = document.querySelector('#story_scroll');
const synopsis = document.querySelector('#synopsis section');
const circle = document.querySelectorAll('.circle');

scrollBar.addEventListener('input', function () {
  let scrollValue = parseInt(scrollBar.value);
  synopsis.style.transform = `translateX(${-scrollValue * 27.5}px)`;
  scrollBar.style.background = `linear-gradient(to right, #00B6FF ${scrollValue}%, #eeeeee ${scrollValue}%)`;

  if (scrollValue >= scrollBar.max) {
    circle[3].classList.add('active');
    circle[2].classList.add('active');
    circle[1].classList.add('active');
  } else if (scrollValue >= scrollBar.max * 0.66) {
    circle[3].classList.remove('active');
    circle[2].classList.add('active');
    circle[1].classList.add('active');
  } else if (scrollValue >= scrollBar.max * 0.33) {
    circle[3].classList.remove('active');
    circle[2].classList.remove('active');
    circle[1].classList.add('active');
  } else {
    circle[3].classList.remove('active');
    circle[2].classList.remove('active');
    circle[1].classList.remove('active');
  }


});


/*character html*/
const itemsEl = document.querySelector('#character section');

characters.forEach(function (character, index) {
  const itemEl = document.createElement('div');
  itemEl.classList.add(`character_${index + 1}`);
  itemEl.classList.add(`character_box`);
  itemEl.innerHTML = /*html*/`

<div class="ch_left">
    <div class="main_thumbnail">
       <img src="${character.picture}" alt="${character.name}+이미지">
    </div>

    <div class="sub_thumbnail">
      <div><img src="${character.picture_1}" alt="${character.name}+이미지"></div>
      <div><img src="${character.picture_2}" alt="${character.name}+이미지"></div>
      <div><img src="${character.picture_3}" alt="${character.name}+이미지"></div>
    </div>
</div>

<div class="ch_right">
    <p class="name">
     ${character.name}
    </p>
    <p class="actor">
     ${character.actor}
    </p>
    <p class="introduce">
     ${character.introduce}
    </p>

    <div class="talk">
     ${character.talk}
    </div>

    <p class="short">
     ${character.short}
    </p>

    <button class="more">
    ${character.more}
    </button>

<button class="ch_close">
    <span class="material-symbols-outlined">close</span>
    </button>

    <div class="ch_button">
      <button class="prev">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <button class="next">
        <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    <div>

</div>
  `
  itemsEl.append(itemEl);

});

/*make group character_box*/
const chrBoxes = document.querySelectorAll('.character_box');
const firstGroup = [];
const secondGroup = [];

function makeDiv() {
  chrBoxes.forEach((chrBox, index) => {
    if (index < 3) {
      firstGroup.push(chrBox);
    } else {
      secondGroup.push(chrBox);
    }
  });

  const firstDiv = document.createElement('div');
  firstDiv.className = 'firstDiv';
  const secondDiv = document.createElement('div');
  secondDiv.className = 'secondDiv';

  firstGroup.forEach((first) => {
    firstDiv.appendChild(first);
  });
  secondGroup.forEach((second) => {
    secondDiv.appendChild(second);
  });

  itemsEl.appendChild(firstDiv);
  itemsEl.appendChild(secondDiv);
}
makeDiv();

/*character thumbnail click*/
for (let i = 0; i < 6; i++) {
  let mainImgs = document.querySelector(`.character_${i + 1} .main_thumbnail img`);
  let subImgs = document.querySelectorAll(`.character_${i + 1} .sub_thumbnail div img`);
  subImgs.forEach(function (sub) {
    sub.addEventListener('click', function () {
      mainImgs.src = sub.src;
    });
  });
}


/*character*/
const firstBoxes = document.querySelectorAll('.firstDiv>div');
const secondBoxes = document.querySelector('.secondDiv>div');
const firstEl = document.querySelector('.firstDiv');
const mores = document.querySelectorAll('.more');
const closes = document.querySelectorAll('.ch_close');

/*first->second*/
firstBoxes.forEach(function (first) {
  first.addEventListener('click', function (event) {
    const target = event.currentTarget;
    if (target.classList.contains('third')) {
      return;
    }

    firstBoxes.forEach(function (other) {
      if (first === other) {
        first.classList.add('second');
        firstEl.classList.add('second');
      } else {
        other.classList.add('other');
      }
    });
  })
});

/*second__more*/
mores.forEach(function(more){
  more.addEventListener('click',function(event){
    event.stopPropagation();
    firstBoxes.forEach(function(first){
      first.classList.remove('other');
      first.classList.remove('second');
      firstEl.classList.remove('second');
      first.classList.add('third');
      firstEl.classList.add('third');
    })
  });
});

/*second__close & third__close*/
closes.forEach(function(close){
  close.addEventListener('click',function(event){
    event.stopPropagation();
    firstBoxes.forEach(function(first){
      first.classList.remove('other');
      first.classList.remove('second');
      firstEl.classList.remove('second');
      first.classList.remove('third');
      firstEl.classList.remove('third');
    })
  });
});
