/*korean<->english*/
const english = document.getElementById('language-english');
const korean = document.getElementById('language-korean');

english.addEventListener('click', () => {
  if (english.innerText === "English") {
      english.innerText = "한국어";
      korean.innerText = "English"
  } else {
      english.innerText = "English";
      korean.innerText = "한국어"
  }
});

const englishmd = document.getElementById('language-english-middle');
const koreanmd = document.getElementById('language-korean-middle');

englishmd.addEventListener('click', () => {
  if (englishmd.innerText === "English") {
    englishmd.innerText = "한국어";
    koreanmd.innerText = "English"
  } else {
    englishmd.innerText = "English";
    koreanmd.innerText = "한국어"
  }
});



/*article_animation*/
//toTop
let observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('back-to-position');
  }else{
    entry.target.classList.remove('back-to-position');
  }
});
});

const goToTop = document.querySelectorAll('.to-top');
goToTop.forEach(toTop => observer.observe(toTop));

//toRight
const goToRight = document.querySelectorAll('.to-right');
goToRight.forEach(toRight => observer.observe(toRight));

//toLeft
const goToLeft = document.querySelectorAll('.to-left');
goToLeft.forEach(toLeft => observer.observe(toLeft));


//toOpacity1
let observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('back-to-opacity');
    }else{
      entry.target.classList.remove('back-to-opacity');
    }
  });
});

const goToOne = document.querySelectorAll('.to-one');
goToOne.forEach(toOne => observer1.observe(toOne));



/*hamburger menu*/
const hamburgerMenuBars = document.querySelectorAll('.hamburger_menu span');
const hamburgerMenu = document.getElementById('hamburger_menu_click');
const category = document.getElementById("category_wrap");
hamburgerMenu.addEventListener('click', hamburgerMenuClick);

function hamburgerMenuClick() {

    hamburgerMenuBars.forEach(function(hamburgerMenuBar){
        hamburgerMenuBar.classList.toggle('active');
    });

    category.classList.toggle('showCategory');
    for(j=0; j<secondCategory.length; j++){
    secondCategory[j].classList.remove('showCategory');
    plus[j].classList.remove('showCategory');
  }
} 

/*hover category*/
const firstCategory = document.querySelectorAll('#category_wrap .first_category-middle');
const secondCategory =  document.querySelectorAll('#category_wrap .second_category-middle');
const plus = document.querySelectorAll('.plus');

firstCategory.forEach(function(first, indexFirst){
  first.addEventListener('click',function(event){
    const category = event.target; //현재 클릭하는 것
    console.log(category);

    //작동조건_클릭 되는 것 중 첫번째 카테고리에서만 작동할 것.
    if(category.classList.contains('ctopen')||category.classList.contains('plus')){
      secondCategory.forEach(function(second, indexSecond){
            if(second.classList.contains('showCategory')){
              second.classList.remove('showCategory');
            }else if(indexFirst === indexSecond){
              second.classList.add('showCategory');
          }
      });
      plus.forEach(function(el, indexplus){
          if(el.classList.contains('showCategory')){
            el.classList.remove('showCategory');
          }else if(indexFirst === indexplus){
            el.classList.add('showCategory');
        }
      });
    }


  });
});
