/*MAIN Header Section*/
function headerJs() {
    let windowSize = window.innerWidth;
    if (windowSize > 1200) {
        window.addEventListener('scroll', headerChangeBig);
    } else {
        window.addEventListener('scroll', headerChangeMiddle);
    }
}
headerJs();
window.addEventListener('resize', headerJs);

function headerChangeBig() {
    let scroll = window.scrollY;
    const hdChange = document.querySelectorAll('.hdChange');
    const imgBox = document.querySelector('#img_box');
    const header = document.querySelector('header');
    const font = document.querySelector('#change_img_text');

    if (scroll >= 0 && scroll <= 400) {
        hdChange.forEach((hd) => {
            hd.classList.remove('hdfirst');
        });
        imgBox.style.width = 500 + (scroll*1.2)+'px';
        imgBox.style.height = 500 + (scroll*1.2)+'px';

    } else if (scroll > 400 && scroll <= 1200) {
        hdChange.forEach((hd) => {
            hd.classList.add('hdfirst');
            hd.classList.remove('hdsecond');
        });
        imgBox.style.width = (scroll*1.2)+'px';
        imgBox.style.height = (scroll*1.2)+'px';


    } else if (scroll > 1200 && scroll <= 3000) {
        hdChange.forEach((hd) => {
            hd.classList.add('hdsecond');
            hd.classList.remove('hdfirst');
            hd.classList.remove('hdthird');
        });
        header.classList.remove('header_blur');
    } else {
        hdChange.forEach((hd) => {
            hd.classList.add('hdthird');
            hd.classList.remove('hdsecond');
        });
        header.classList.add('header_blur');
        font.style.fontSize= 20 + scroll / 500 + 'px';
    }
}


function headerChangeMiddle() {
    let scrollMiddle = window.scrollY;
    let curHeight = window.innerHeight;
    const headerMiddle = document.querySelectorAll('.header-middle');

    if (scrollMiddle > curHeight) {
        headerMiddle.forEach(function (header) {
            header.classList.add('change');
        });
    } else {
        headerMiddle.forEach(function (header) {
            header.classList.remove('change');
        });
    }
}



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



/*others scroll slide*/
const flipRoute = document.querySelector('.others-flip-all');

document.addEventListener('scroll', slideLeft);
function slideLeft() {
    let leftRoute = window.scrollY - 13500;
    // console.log(leftRoute);
    if (leftRoute < 0) {
        flipRoute.style.transform = 'translateX(' + (-leftRoute) + 'px)';
    } else if (leftRoute >= 0 && leftRoute < 600) {
        flipRoute.style.transform = 'translateX(0px)';
    } else if (leftRoute >= 600 && leftRoute < 1800) {
        flipRoute.style.transform = 'translateX(' + (-leftRoute + 600) + 'px)';
    } else {
        flipRoute.style.transform = 'translateX(-1200px)';
    }
}



/*notice_slider*/
    let slideWidth = $('.notice').outerWidth(true);

function prev() {
    $('#notice_article .notice:last').prependTo('#notice_article');
    $('#notice_article').css('margin-left', -slideWidth);
    $('#notice_article').stop().animate({ marginLeft: 0 }, 800);
}
function next() {
    $('#notice_article').stop().animate({ marginLeft: -slideWidth }, 800, function () {
        $('#notice_article .notice:first').appendTo('#notice_article');
        $('#notice_article').css({ marginLeft: 0 });
    });
}

setInterval(next, 5000);

$('#prev').click(function () {
    prev();
});

$('#next').click(function () {
    next();
});


/*ghibli_animation / toggle*/
const aniArticles = document.querySelectorAll('.ghibli_animation_article');
const paginations = document.querySelectorAll('#pagination a');
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

//color-change
let observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('colorChange');
      }else{
        entry.target.classList.remove('colorChange');
      }
    });
  });
  
  const colorChange = document.querySelectorAll('#change_img_text-middle');
  colorChange.forEach(change => observer2.observe(change));

