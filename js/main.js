/*한국어<->영어*/
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
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 400) {
        $('#img_box').css({
            'width': 500 + (scroll * 1.2),
            'height': 500 + (scroll * 1.2),
            'border-radius': '50%'
        });
        $('#howl').css({
            'bottom': '0%',
            'left': '-25%',
            'width': '150%'
        });
        $('#studioGhibli_write').css({
            'opacity': '1',
        });

    } else if (scroll > 400 && scroll <= 1200) {
        $('#img_box').css({
            'width': + (scroll * 1.2),
            'height': + (scroll * 1.2),
            'border-radius': '50%',
            'backgroundSize': 'cover'
        });
        $('#studioGhibli_write').css({
            'opacity': '0',
            'transition-delay': '0'
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
        $('#logo_img').attr(
            'src', 'img/main/ghibli_logo_blue.png'
        );
        $('#logo_img_blue').css({
            'opacity': '1'
        });
    } else if (scroll > 1200 && scroll <= 3000) {
        $('#img_box').css({
            'width': '100vw',
            'height': '100vh',
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
            'fontSize': 30 + scroll / 500 + 'px'
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
        $('header').addClass('header_blur');
    }
});

/*ghibli_animation*/
window.addEventListener('scroll', imgChange);

function imgChange() {
    const article1 = document.getElementById('ghibli_animation_article1_all');
    const articleHaku = document.getElementById('ghibli_animation_article1_haku');
    const articleBackground = document.getElementById('ghibli_animation_article1_img_background_first');
    const pagination = document.getElementById('pagination');
    let windowHeight = window.innerHeight;
    let article1Top = article1.getBoundingClientRect().top;
    let trigger = windowHeight / 1.8;

    if (article1Top < trigger) {
        article1.classList.add('opacityToggle');
        articleHaku.classList.remove('opacityToggle');
        articleBackground.classList.add('opacityToggle');
        pagination.classList.remove('opacityToggle');
    } else {
        article1.classList.remove('opacityToggle');
        articleHaku.classList.add('opacityToggle');
        articleBackground.classList.remove('opacityToggle');
        pagination.classList.add('opacityToggle');
    }
}
