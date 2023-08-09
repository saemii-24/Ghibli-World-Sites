import characters from '../data/character.js'



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
  // synopsis.style.transform = `translateX(${-scrollValue * 27.5}px)`;
  synopsis.style.transition = 'none';
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

  if(window.innerWidth>=1200){
    synopsis.style.transform = `translateX(${-scrollValue * 27.5}px)`;
  }else if(window.innerWidth>=768){
    synopsis.style.transform = `translateX(${-scrollValue * 19}px)`;
  }else{
    synopsis.style.transform = `translateX(${-scrollValue * 15}px)`;
  }


});


/*character html*/
const itemsEl = document.querySelector('#character section');

characters.forEach(function (character, index) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('character_box', `character_${index + 1}`, 'to-top-chr');

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
function makeDiv() {
  const chrBoxes = document.querySelectorAll('.character_box');
  const firstGroup = [];
  const secondGroup = [];

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

/*put delay class*/
/*인덱스 번호를 활용해 지그재그로 delay 0, 1, 클래스명 넣기*/
function putDelay(){
  const firstDivs = document.querySelectorAll('.firstDiv .character_box');
  const secondDivs = document.querySelectorAll('.secondDiv .character_box');
    firstDivs.forEach((first)=>{first.classList.add('delay-0')});
    secondDivs.forEach((second)=>{second.classList.add('delay-1')});
  }
  putDelay()
  


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
const mores = document.querySelectorAll('.more');
const closes = document.querySelectorAll('.ch_close');

/*first->second*/

function activeSecond(DivBoxes,parentEl){
  DivBoxes.forEach(function (div) {
    div.addEventListener('click', function (event) {
      const target = event.currentTarget;
      if (target.classList.contains('third')) {
        return;
      }
  
      DivBoxes.forEach(function (other) {
        if (div === other) {
          div.classList.add('second');
          parentEl.classList.add('second');
        } else {
          other.classList.add('other');
        }
      });
    })
  });
}

const firstBoxes = document.querySelectorAll('.firstDiv>div');
const secondBoxes = document.querySelectorAll('.secondDiv>div');
const firstEl = document.querySelector('.firstDiv');
const secondEl = document.querySelector('.secondDiv');
activeSecond(firstBoxes,firstEl);
activeSecond(secondBoxes,secondEl);



/*second__more*/
function activeMore(DivBoxes,parentEl){
mores.forEach(function(more){
  more.addEventListener('click',function(event){
    const section = document.querySelector('#character section');
    const targetDiv = event.target.closest('.character_box');
    // console.log(targetDiv);
    DivBoxes.forEach(function(box){
      section.classList.add('third');
      box.classList.remove('other','second');
      parentEl.classList.remove('second');
      box.classList.add('third');
      parentEl.classList.add('third');
      targetDiv.style.zIndex = 3;      
    })
  });
});
}

activeMore(firstBoxes,firstEl);
activeMore(secondBoxes,secondEl);



/*second__close & third__close*/
function activeClose(DivBoxes,parentEl){
closes.forEach(function(close){
  close.addEventListener('click',function(event){
    const Chtarget = event.currentTarget.closest(".character_box"); //이벤트 요소
    const targetParent = Chtarget.parentNode;
    const targetChildren = targetParent.childNodes; ; //이벤트 요소의 형제들
    const section = document.querySelector('#character section');
    event.stopPropagation();

    DivBoxes.forEach(function(box){
      if(Chtarget.classList.contains('second')){
        Chtarget.classList.remove('second');
        targetParent.classList.remove('second');
        targetChildren.forEach((target)=>target.classList.remove('other'));
      }else{
      section.classList.remove('third');
      box.classList.remove('third');
      parentEl.classList.remove('third');
      box.style.zIndex = '1';
    }
    });
  });
});
}
activeClose(firstBoxes,firstEl);
activeClose(secondBoxes,secondEl);


/*third__next*/
const nextBtns = document.querySelectorAll('.next');

nextBtns.forEach(function(next){
  const chrBoxes = [...document.querySelectorAll('.character_box')];
  next.addEventListener('click',function(event){
    let nowBox = event.currentTarget.closest('.character_box');
    let chrIndex = chrBoxes.indexOf(nowBox);
    
    if(chrIndex===chrBoxes.length-1){
      chrBoxes[0].style.zIndex = '3';
      chrBoxes[chrIndex].style.zIndex = '1';
      chrIndex = 0;
    }else{
      chrBoxes[chrIndex+1].style.zIndex='3';
      chrBoxes[chrIndex].style.zIndex='1';
    }
    chrIndex++;

  });
});

const prevBtns = document.querySelectorAll('.prev');

prevBtns.forEach(function(prev){
  const chrBoxes = [...document.querySelectorAll('.character_box')];
  prev.addEventListener('click',function(event){
    let nowBox = event.currentTarget.closest('.character_box');
    let chrIndex = chrBoxes.indexOf(nowBox);

    if(chrIndex===0){
      chrBoxes[chrBoxes.length-1].style.zIndex = '3';
      chrBoxes[0].style.zIndex = '1';
      chrIndex = chrBoxes.length-1;
    }else{
      chrBoxes[chrIndex-1].style.zIndex='3';
      chrBoxes[chrIndex].style.zIndex='1';
    }
    chrIndex--;
  });
});



/*header_blur*/
/*첫 메인 페이지를 지나면 header에 blur를 추가한다*/
let mainHeight = document.querySelector('#movie_poster .full_inner').offsetHeight;
const header = document.querySelector('.header-middle');
window.addEventListener('resize',function(){
  mainHeight = document.querySelector('#movie_poster .full_inner').offsetHeight;
});

window.addEventListener('scroll',function(){
  if(this.scrollY<mainHeight){
    header.classList.remove('header_blur');
  }else if(this.scrollY>mainHeight){
     header.classList.add('header_blur');
}
});


/*moving tag location*/
/*window width 값이 949 이하면 요소 위치를 옮겨 배치한다.*/
movingTag();
function movingTag() {
  const chrBoxes = document.querySelectorAll('.character_box');
  let nowWidth = window.innerWidth;

  window.addEventListener('resize', function () {
    nowWidth = window.innerWidth;
  });
  chrBoxes.forEach(function(chrBox){
    
    if (nowWidth <= 949) {
      let moveParent = chrBox;
      let moveButton = moveParent.querySelector(`.ch_button`);
      let moveClose = moveParent.querySelector(`.ch_close`);
      let moveTalk = moveParent.querySelector(`.talk`);
      moveParent.append(moveButton, moveClose, moveTalk);
    }else{
      return;
    };
  });
}

/*stop Animation*/
/*Character article은 나타난 후 화면에서 보이지 않아도, 다시 사라지지 않음*/

 let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('back-to-position');
    }else if(!(entry.isIntersecting && entry.classList.contains('third','second'))){
      entry.target.classList.remove('back-to-position');
    }
  });
});

const goToTop = document.querySelectorAll('.to-top-chr');
goToTop.forEach(toTop => observer.observe(toTop));


/*award delay*/
/*작은 사이즈에서 award의 애니메이션 delay 수정*/
awardDelay();
function awardDelay(){
  const awards = document.querySelectorAll('.award_box div');
  let nowWidth = window.innerWidth;

  window.addEventListener('resize', function () {
    nowWidth = window.innerWidth;
  });

  awards.forEach((award, index) => {
    if (nowWidth <= 767) {
      award.classList.remove('delay-0', 'delay-1', 'delay-2')
      if (index % 2 === 0) {
        award.classList.add('delay-0');
      } else {
        award.classList.add('delay-1');
      }
    } else {
      return;
    }
  });
}
