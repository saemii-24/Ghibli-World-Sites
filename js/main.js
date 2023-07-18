/*한국어<->영어*/
const english = document.getElementById('language-english');
const korean = document.getElementById('language-korean');

english.addEventListener('click', () => {
    if(english.innerText==="English"){
        english.innerText = "한국어";
        korean.innerText = "English"
    }else{
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
            'opacity':'1',
        });
        
    }else if(scroll>400 && scroll<=1200){
        $('#img_box').css({
            'width': + (scroll * 1.2),
            'height':+ (scroll * 1.2),
            'border-radius': '50%',
            'backgroundSize' : 'cover'
        });
        $('#studioGhibli_write').css({
            'opacity':'0',
            'transition-delay' : '0'
        });
        $('#scroll_info, #logo_img_white').css({
            'opacity':'0',
        });
        $('#howl').css({
            'bottom': '0%',
            'left': '-25%',
            'width': '150%'
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color':'#00B6FF'
        });
        $('#logo_img').attr(
            'src','img/main/ghibli_logo_blue.png'
        );
        $('#logo_img_blue').css({
            'opacity':'1'
         });
    }else if(scroll>1200 && scroll<=3500){
        $('#img_box').css({
            'width': '100vw',
            'height': '100vh',
            'border-radius': '0',
            'backgroundSize':'cover'
        });
        $('#howl').css({
            'top': '20%',
            'left': '0%',
            'width': '100%'
        });
        $('#scroll_info,#logo_img_white').css({
            'opacity':'1',
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color':'#ffffff'
        });
        $('#logo_img_blue').css({
           'opacity':'0'
        });
    }else{
        $('#main_section').css({
            'position':'static'
        });
    }
});