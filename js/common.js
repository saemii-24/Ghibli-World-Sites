//common

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
let observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('back-to-position');
      }else{
        entry.target.classList.remove('back-to-position');
      }
    });
  });
  
  const goToRight = document.querySelectorAll('.to-right');
  goToRight.forEach(toRight => observer2.observe(toRight));

  //toLeft
  let observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('back-to-position');
      }else{
        entry.target.classList.remove('back-to-position');
      }
    });
  });
  
  const goToLeft = document.querySelectorAll('.to-left');
  goToLeft.forEach(toLeft => observer3.observe(toLeft));


  //toOpacity1
  let observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('back-to-opacity');
      }else{
        entry.target.classList.remove('back-to-opacity');
      }
    });
  });
  
  const goToOne = document.querySelectorAll('.to-one');
  goToOne.forEach(toOne => observer4.observe(toOne));


  
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
    first.addEventListener('click',function(){
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
    });
});
