import characters from '../data/character.js';

/*youtube_popup*/

youtubeOpen();

function youtubeOpen() {
  const closePopup = document.getElementById("close");
  const openPopup = document.getElementById("play");
  const popup = document.querySelector('#movie_video .full_inner');
  let nowWidth = window.innerWidth; /*현재 윈도우 사이즈 판단*/

  window.addEventListener('resize', function () {
    nowWidth = window.innerWidth;
  });

  if (nowWidth <= 767) { /*유튜브 링크로 이동*/
    openPopup.addEventListener('click', () => {
      window.location.assign("https://www.youtube.com/watch?v=70NhEBzLKU8");
    });
  } else { /*작은 사이즈를 제외하고는 , popup으로 유튜브 제공*/
    openPopup.addEventListener('click', function () {
      popup.classList.add('active');
      openPopup.innerText = ('stop_circle');
      const header = document.querySelector('.header-middle');
    });

    closePopup.addEventListener('click', function () {
      popup.classList.remove('active');
      openPopup.innerText = ('play_circle');
      stopVideo(); //close button 누르면 자동으로 영상 멈춤
    });
  }
}


/*scrollbar*/
const scrollBar = document.querySelector('#story_scroll');
const synopsis = document.querySelector('#synopsis section');
const circle = document.querySelectorAll('.circle');


scrollBar.addEventListener('input', function () {
  let scrollValue = parseInt(scrollBar.value);
  // synopsis.style.transform = `translateX(${-scrollValue * 27.5}px)`;
  synopsis.style.transition = 'none';
  scrollBar.style.background = `linear-gradient(to right, #00B6FF ${scrollValue}%, #eeeeee ${scrollValue}%)`;
  console.log(scrollValue);


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

  /*range 조정시 synopsis 넘어갈 수 있도록*/
  if (window.innerWidth >= 1200) {
    synopsis.style.transform = `translateX(${-scrollValue * 27.5}px)`;
  } else if (window.innerWidth >= 768) {
    synopsis.style.transform = `translateX(${-scrollValue * 21}px)`;
  } else {
    const synopsisWidth = document.querySelector('#synopsis .synGroup').offsetWidth;
    const moveValue = synopsisWidth / 33;
    console.log(moveValue);
    synopsis.style.transform = `translateX(${-scrollValue * moveValue}px)`;
  }
});


/*character html*/
const itemsEl = document.querySelector('#character section');

characters.forEach(function (character, index) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('character_box', `character_${index + 1}`, 'to-top-chr');

  itemEl.innerHTML = /*html*/`

<div class="ch_left">
    <div class="main_thumbnail"></div>

    <div class="sub_thumbnail">
      <div></div>
      <div></div>
      <div></div>
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
function putDelay() {
  const firstDivs = document.querySelectorAll('.firstDiv .character_box');
  const secondDivs = document.querySelectorAll('.secondDiv .character_box');
  firstDivs.forEach((first) => { first.classList.add('delay-0') });
  secondDivs.forEach((second) => { second.classList.add('delay-1') });
}
putDelay()



/*character thumbnail click*/
for (let i = 0; i < 6; i++) {
  let mainImgs = document.querySelector(`.character_${i + 1} .main_thumbnail`);
  let subImgs = document.querySelectorAll(`.character_${i + 1} .sub_thumbnail div`);
  subImgs.forEach(function (sub) {
    sub.addEventListener('click', function (event) {
      let subTarget = event.currentTarget;
      const subUrl = window.getComputedStyle(subTarget).backgroundImage;
      mainImgs.style.backgroundImage = subUrl;
    });
  });
}


/*character*/
const mores = document.querySelectorAll('.more');
const closes = document.querySelectorAll('.ch_close');

/*first->second*/

function activeSecond(DivBoxes, parentEl) {
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


/*second__more*/
function activeMore(DivBoxes, parentEl) {
  mores.forEach(function (more) {
    more.addEventListener('click', function (event) {
      const section = document.querySelector('#character section');
      const targetDiv = event.target.closest('.character_box');
      // console.log(targetDiv);
      DivBoxes.forEach(function (box) {
        section.classList.add('third');
        box.classList.remove('other', 'second');
        parentEl.classList.remove('second');
        box.classList.add('third');
        parentEl.classList.add('third');
        targetDiv.style.zIndex = 3;
      })
    });
  });
}

activeMore(firstBoxes, firstEl);
activeMore(secondBoxes, secondEl);



/*second__close & third__close*/
function activeClose(DivBoxes, parentEl) {
  closes.forEach(function (close) {
    close.addEventListener('click', function (event) {
      const Chtarget = event.currentTarget.closest(".character_box"); //이벤트 요소
      const targetParent = Chtarget.parentNode;
      const targetChildren = targetParent.childNodes;; //이벤트 요소의 형제들
      const section = document.querySelector('#character section');
      event.stopPropagation();

      DivBoxes.forEach(function (box) {
        if (Chtarget.classList.contains('second')) {
          Chtarget.classList.remove('second');
          targetParent.classList.remove('second');
          targetChildren.forEach((target) => target.classList.remove('other'));
        } else {
          section.classList.remove('third');
          box.classList.remove('third');
          parentEl.classList.remove('third');
          box.style.zIndex = '1';
        }
      });
    });
  });
}
activeClose(firstBoxes, firstEl);
activeClose(secondBoxes, secondEl);


/*third__next*/
const nextBtns = document.querySelectorAll('.next');

nextBtns.forEach(function (next) {
  const chrBoxes = [...document.querySelectorAll('.character_box')];
  next.addEventListener('click', function (event) {
    let nowBox = event.currentTarget.closest('.character_box');
    let chrIndex = chrBoxes.indexOf(nowBox);

    if (chrIndex === chrBoxes.length - 1) {
      chrBoxes[0].style.zIndex = '3';
      chrBoxes[chrIndex].style.zIndex = '1';
      chrIndex = 0;
    } else {
      chrBoxes[chrIndex + 1].style.zIndex = '3';
      chrBoxes[chrIndex].style.zIndex = '1';
    }
    chrIndex++;

  });
});

const prevBtns = document.querySelectorAll('.prev');

prevBtns.forEach(function (prev) {
  const chrBoxes = [...document.querySelectorAll('.character_box')];
  prev.addEventListener('click', function (event) {
    let nowBox = event.currentTarget.closest('.character_box');
    let chrIndex = chrBoxes.indexOf(nowBox);

    if (chrIndex === 0) {
      chrBoxes[chrBoxes.length - 1].style.zIndex = '3';
      chrBoxes[0].style.zIndex = '1';
      chrIndex = chrBoxes.length - 1;
    } else {
      chrBoxes[chrIndex - 1].style.zIndex = '3';
      chrBoxes[chrIndex].style.zIndex = '1';
    }
    chrIndex--;
  });
});


/*first to Third*/
/*작은 사이즈에서 캐릭터 박스는 basic에서 second를 건너뛰고, 바로 third css를 적용한다*/
function firstToThird() {
  const chrBoxes = document.querySelectorAll('.character_box');

  chrBoxes.forEach((chrBox) => {
    chrBox.addEventListener('click', function (event) {
      const curTarget = event.currentTarget; /*현재 클릭한 third 클래스를 맨위로 위치시킨다.*/
      curTarget.style.zIndex = '2';

      chrBoxes.forEach((chrBox) => { /*모두 third class로 겹쳐둔다.*/
        chrBox.classList.add('third');
      });

    });
  });
}




/*Size 별 정리*/
/*cellPhone size 에서는 바로 basic -> third로 넘어가며,
나머지는 basic -> second -> third로 넘어간다.*/
characterSize();
function characterSize() {
  let nowWidth = window.innerWidth;

  window.addEventListener('resize', function () {
    nowWidth = window.innerWidth;
  });

  if (nowWidth <= 767) {
    firstToThird();
    const actor = document.querySelectorAll('.actor') /*actor의 | 문자를 <br>태그로 교체해 줄바꿈 한다*/
    actor.forEach((act) => {
      let actText = act.innerHTML;
      let newText = actText.replace(' &nbsp;| &nbsp;', '<br>');
      act.innerHTML = newText;
    });
  } else {
    activeSecond(firstBoxes, firstEl);
    activeSecond(secondBoxes, secondEl);

  }
}



/*header_blur*/
/*첫 메인 페이지를 지나면 header에 blur를 추가한다*/
let mainHeight = document.querySelector('#movie_poster .full_inner').offsetHeight;
const header = document.querySelector('.header-middle');
window.addEventListener('resize', function () {
  mainHeight = document.querySelector('#movie_poster .full_inner').offsetHeight;
});

window.addEventListener('scroll', function () {
  if (this.scrollY < mainHeight) {
    header.classList.remove('header_blur');
  } else if (this.scrollY > mainHeight) {
    header.classList.add('header_blur');
  }
});


/*moving tag location*/
/*window width 값이 949 이하면 요소 위치를 옮겨 배치한다.*/
let nowWidth = window.innerWidth;
window.addEventListener('resize', function () {
  nowWidth = window.innerWidth;
});
console.log(nowWidth);

movingTag();
function movingTag() {
  const chrBoxes = document.querySelectorAll('.character_box');
  const chrRightBoxes = document.querySelectorAll('.ch_right');
  
    if (nowWidth <= 949 && nowWidth >= 0) {
      chrBoxes.forEach(function (chrBox) {
        let moveParent = chrBox;
        let moveButton = moveParent.querySelector(`.ch_button`);
        let moveClose = moveParent.querySelector(`.ch_close`);
        let moveTalk = moveParent.querySelector(`.talk`);
        moveParent.append(moveButton, moveClose, moveTalk);
      });
    } else if (nowWidth > 949) {
      chrRightBoxes.forEach(function (rightBox) {
        let moveParent = rightBox.parentNode; //rightBox 부모요소에 넣어야 한다.
        let moveButton = moveParent.querySelector(`.ch_button`);
        let moveClose = moveParent.querySelector(`.ch_close`);
        let moveTalk = moveParent.querySelector(`.talk`);
        rightBox.append(moveButton, moveClose, moveTalk);
      });
    };
}

/*stop Animation*/
/*Character article은 나타난 후 화면에서 보이지 않아도, 다시 사라지지 않음*/

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('back-to-position');
    }
  });
});

const goToTop = document.querySelectorAll('.to-top-chr');
goToTop.forEach(toTop => observer.observe(toTop));


/*character delay*/
/*작은 사이즈에서 award의 애니메이션 delay 수정*/
characterDelay();
function characterDelay() {
  const secondDiv = document.querySelectorAll('.secondDiv div');

  secondDiv.forEach((second) => {
    if (nowWidth <= 767) {
      second.classList.remove('delay-1');
      second.classList.add('delay-0');
    } else {
      second.classList.add('delay-1');
      second.classList.remove('delay-0');
    }
  });
}

/*award delay*/
/*작은 사이즈에서 award의 애니메이션 delay 수정*/

awardDelay();
function awardDelay() {
  const awards = document.querySelectorAll('.award_box div');

  awards.forEach((award, index) => {
    award.classList.remove('delay-0', 'delay-1', 'delay-2');
    if (nowWidth <= 767) {
      if (index % 2 === 0) {
        award.classList.add('delay-0');
      } else {
        award.classList.add('delay-1');
      }
    } else {

      if (index === 0 || index === 3) {
        award.classList.add('delay-0');
      } else if (index === 1 || index == 4) {
        award.classList.add('delay-1');
      } else {
        award.classList.add('delay-2');
      }
    }
  });
}


/*window.onload시 실행되어야 할 함수들*/
window.onload = function () {
  movingTag();
  characterDelay();
  awardDelay();
};

window.addEventListener('resize',function(){
  movingTag();
  characterDelay();
  awardDelay();
});