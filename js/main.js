/*size reload*/
// $(function() {
//     $(window).resize(function() {
//       location.reload(); 
//         });
//     });

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

/*MAIN SECTION*/
$(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 400) {
        $('#img_box').css({
            'width': 500 + (scroll * 1.2),
            'height': 500 + (scroll * 1.2),
            'border-radius': '50%'
        });
        $('#studioGhibli_write').css({
            'opacity': '1'
        });

    } else if (scroll > 400 && scroll <= 1200) {
        $('#img_box').css({
            'width': + (scroll * 1.2),
            'height': + (scroll * 1.2),
            'border-radius': '50%',
            'backgroundSize': 'cover'
        });
        $('#studioGhibli_write').css({
            'opacity': '0'
        });
        $('#scroll_info, #logo_img_white').css({
            'opacity': '0',
        });
        $('#howl').css({
            'bottom': '0%',
            'left': '-25%',
            'width': '150%'
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color': '#00B6FF'
        });
        // $('.hamburger_menu span').css({
        //     'background-color': '#00B6FF'
        // });
        $('#logo_img').attr(
            'src', 'img/main/ghibli_logo_blue.png'
        );
        $('#logo_img_blue').css({
            'opacity': '1'
        });
    } else if (scroll > 1200 && scroll <= 3000) {
        $('#img_box').css({
            'width': '100%',
            'height': '100%',
            'border-radius': '0',
            'backgroundSize': 'cover'
        });
        $('#howl').css({
            'top': '20%',
            'left': '0%',
            'width': '100%'
        });
        $('#scroll_info,#logo_img_white,#img_box').css({
            'opacity': '1',
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color': '#ffffff'
        });
        // $('.hamburger_menu span').css({
        //     'background-color': '#ffffff'
        // });
        $('#logo_img_blue, #change_img_box, #change_img_text').css({
            'opacity': '0'
        });
        $('header').removeClass('header_blur');
    } else {
        $('#change_img_box').css({
            'opacity': '1',
        });
        $('#change_img_text').css({
            'opacity': '1',
            'fontSize': 20 + scroll / 500 + 'px'
        });
        $('#scroll_info,#logo_img_blue').css({
            'opacity': '1',
        });
        $('#logo_img_white, #img_box').css({
            'opacity': '0',
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color': '#00B6FF'
        });
        $('.hamburger_menu span').css({
            'background-color': '#00B6FF'
        });
        $('header').addClass('header_blur');
    }
});

/*MAIN SECTION-middle-small*/
$(window).on('scroll', function () {
    let scrollMiddle = $(window).scrollTop();
    let mainHeight = $("#img_box-middle").width();
    console.log(mainHeight);
    if (scrollMiddle >= 0 && scrollMiddle <= mainHeight) {
        // $('#logo_img').attr(
        //     'src', 'img/main/ghibli_logo_blue.png'
        // );
        // $('#logo_img_blue').css({
        //     'opacity': '1'
        // });
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



/*others scroll slide*/
// const flipRoute = document.querySelector('.others-flip-all');
// const flipWidth = document.getElementById('others-flip-1').clientWidth;
// const halfWidth = flipWidth/2;

// document.addEventListener('scroll', slideLeft);
// function slideLeft() {
//     let leftRoute = window.scrollY - 13500;
//     // console.log(leftRoute);
//     if (leftRoute < 0) {
//         flipRoute.style.transform = 'translateX(' + (-leftRoute) + 'px)';
//     } else if (leftRoute >= 0 && leftRoute < halfWidth) {
//         flipRoute.style.transform = 'translateX(0px)';
//     } else if (leftRoute >= halfWidth && leftRoute < halfWidth+flipWidth) {
//         flipRoute.style.transform = 'translateX(' + (-leftRoute + halfWidth) + 'px)';
//     } else {
//         flipRoute.style.transform = `translateX(${-flipWidth}px)`;
//     }
// }

const flipRoute = document.querySelector('.others-flip-all');
const flipWidth = document.getElementById('others-flip-1').clientWidth;
const halfWidth = flipWidth/2;

document.addEventListener('scroll', slideLeft);
function slideLeft() {
    let leftRoute = window.scrollY - 13500;
    // console.log(leftRoute);
    if (leftRoute < 0) {
        flipRoute.style.transform = 'translateX(' + (-leftRoute) + 'px)';
    } else if (leftRoute >= 0 && leftRoute < halfWidth) {
        flipRoute.style.transform = 'translateX(0px)';
    } else if (leftRoute >= halfWidth && leftRoute < halfWidth+flipWidth) {
        flipRoute.style.transform = 'translateX(' + (-leftRoute + halfWidth) + 'px)';
    } else {
        flipRoute.style.transform = `translateX(${-flipWidth}px)`;
    }
}

/*notice_slider*/
    let slideWidth = $('.notice').width();

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

// setInterval(next, 5000);

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
  goToLeft.forEach(toLeft => observer2.observe(toLeft));

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
} 

