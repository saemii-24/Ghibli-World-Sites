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


/*ghibli_animation*/
window.addEventListener('scroll', imgChange);

function imgChange() {
    const article1 = document.getElementById('ghibli_animation_article1_all');
    const articleHaku = document.getElementById('ghibli_animation_article1_haku');
    const articleBackground = document.getElementById('ghibli_animation_article1_img_background_first');

    let windowHeight = window.innerHeight;
    let article1Top = article1.getBoundingClientRect().top;
    let trigger = windowHeight / 3;

    if (article1Top < trigger) {
        article1.classList.add('opacityToggle');
        articleHaku.classList.remove('opacityToggle');
        articleBackground.classList.add('opacityToggle');
    } else {
        article1.classList.remove('opacityToggle');
        articleHaku.classList.add('opacityToggle');
        articleBackground.classList.remove('opacityToggle');
    }
}


/*ghibli_animation / toggle*/
const aniArticles = document.querySelectorAll('.ghibli_animation_article');
const paginations = document.querySelectorAll('#pagination a');
console.log(paginations);
document.addEventListener('scroll', paginationColor);

function paginationColor() {

    for (let i = 0; i < paginations.length; i++) {
        let paginationLocate = paginations[i].getBoundingClientRect().top + document.documentElement.scrollTop;
        let articleTop = aniArticles[i].getBoundingClientRect().top + document.documentElement.scrollTop;
        let articleBottom = aniArticles[i].getBoundingClientRect().bottom + document.documentElement.scrollTop;

        paginations[i].classList.remove('active');

        if (paginationLocate > articleTop &&
            paginationLocate < articleBottom) {
            paginations[i].classList.add('active');
        }
    }
}


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

//color-change
let observer4 = new IntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('colorChange');
    }else{
      entry.target.classList.remove('colorChange');
    }
});

const colorChange = document.getElementById('change_img_text_middle');
observer4.observe(colorChange);


 /*hamburger menu*/
const hamburgerMenuBars = document.querySelectorAll('.hamburger_menu span');
const hamburgerMenu = document.getElementById('hamburger_menu_click');
const category = document.getElementById("category");
hamburgerMenu.addEventListener('click', hamburgerMenuClick);

function hamburgerMenuClick() {
    hamburgerMenuBars.forEach(function(hamburgerMenuBar){
        hamburgerMenuBar.classList.toggle('active');
    });
    category.classList.toggle('showCategory');
} 