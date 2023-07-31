/*MAIN SECTION*/

let scroll = window.scrollY;
window.addEventListener('scroll',scrollTitle);

function scrollTitle(){
    const imgBox = document.getElementById('img_box');
    const howl = document.getElementById('howl');
    const studioGhibliWrite = document.getElementById('studioGhibli_write');
    const header = document.querySelector(header);
    const scrollInfo = document.getElementById('scroll_info');
    const logoWhite = document.getElementById('logo_img_white');
    const logoBlue = document.getElementById('logo_img_blue');
    const changeImgText = document.getElementById('change_img_text');
    const changeImgBox = document.getElementById('change_img_box');
    
    if(scroll>=0 && scroll<=400){
        Object.assign(imgBox.style, {
            width:  500 + (scroll * 1.2),
            fontSize: 500 + (scroll * 1.2),
            });
        studioGhibliWrite.classList.remove('opacityToggle');

    }else if(scroll> 400 && scroll<=1200){
        Object.assign(imgBox.style, {
            width:  + (scroll * 1.2),
            fontSize: + (scroll * 1.2),
            backgroundSize : 'cover'
        });
        howl.classList.remove('small');  
        studioGhibliWrite.classList.add('opacityToggle');
        scrollInfo.classList.remove('opacityToggleReverse'); 
    }else if(scroll> 1200 && scroll <= 3000){
        Object.assign(imgBox.style, {
            width: '100vw',
            height: '100vh',
            borderRadius: '0',
            backgroundSize: 'cover'
        });
        howl.classList.add('small'); 
        header.removeClass('header_blur');  
        scrollInfo.classList.add('opacityToggleReverse'); 
        logoWhite.classList.add('opacityToggleReverse');
        imgBox.classList.add('opacityToggleReverse');
        logoBlue.classList.remove('opacityToggleReverse');
        changeImgText.classList.remove('opacityToggleReverse');
        changeImgBox.classList.remove('opacityToggleReverse');
    }else{
        header.addClass('header_blur');
        logoBlue.classList.add('opacityToggleReverse');
        logoWhite.classList.remove('opacityToggleReverse');
        imgBox.classList.remove('opacityToggleReverse');
        changeImgBox.classList.add('opacityToggleReverse');
        changeImgText.classList.add('opacityToggle');
        changeImgText.style.fontSize= 30 + scroll / 500 + 'px'
        }
    }
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 0 && scroll <= 400) {
            // $('#img_box').css({
            //     'width': 500 + (scroll * 1.2),
            //     'height': 500 + (scroll * 1.2),
            //     'border-radius': '50%'
            // });
            // $('#howl').css({
            //     'bottom': '0%',
            //     'left': '-25%',
            //     'width': '150%'
            // });
            // $('#studioGhibli_write').css({
            //     'opacity': '1',
            // });
    
        } else if (scroll > 400 && scroll <= 1200) {
            // $('#img_box').css({
            //     'width': + (scroll * 1.2),
            //     'height': + (scroll * 1.2),
            //     'border-radius': '50%',
            //     'backgroundSize': 'cover'
            // });
            // $('#studioGhibli_write').css({
            //     'opacity': '0',
            //     'transition-delay': '0'
            // });
            // $('#scroll_info, #logo_img_white').css({
            //     'opacity': '0',
            // });
            // $('#howl').css({
            //     'bottom': '0%',
            //     'left': '-25%',
            //     'width': '150%'
            // });
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
            // $('#img_box').css({
            //     'width': '100vw',
            //     'height': '100vh',
            //     'border-radius': '0',
            //     'backgroundSize': 'cover'
            // });
            // $('#howl').css({
            //     'top': '20%',
            //     'left': '0%',
            //     'width': '100%'
            // });
            // $('#scroll_info,#logo_img_white,#img_box').css({
            //     'opacity': '1',
            // });
            $('.first_category,#language_icon,#language-korean,#logo_text').css({
                'color': '#ffffff'
            });
            // $('#logo_img_blue, #change_img_box, #change_img_text').css({
            //     'opacity': '0'
            // });
            // $('header').removeClass('header_blur');
        } else {
            // $('#change_img_box').css({
            //     'opacity': '1',
            // });
            // $('#change_img_text').css({
            //     'opacity': '1',
            //     'fontSize': 30 + scroll / 500 + 'px'
            // });
            // $('#scroll_info,#logo_img_blue').css({
            //     'opacity': '1',
            // });
            // $('#logo_img_white, #img_box').css({
            //     'opacity': '0',
            // });
            $('.first_category,#language_icon,#language-korean,#logo_text').css({
                'color': '#00B6FF'
            });
            // $('header').addClass('header_blur');
        }
    });
    // $(window).on('scroll', function () {
    //     let scroll = $(window).scrollTop();
    //     if (scroll >= 0 && scroll <= 400) {
    //         $('#img_box').css({
    //             'width': 500 + (scroll * 1.2),
    //             'height': 500 + (scroll * 1.2),
    //             'border-radius': '50%'
    //         });
    //         $('#howl').css({
    //             'bottom': '0%',
    //             'left': '-25%',
    //             'width': '150%'
    //         });
    //         $('#studioGhibli_write').css({
    //             'opacity': '1',
    //         });
    
    //     } else if (scroll > 400 && scroll <= 1200) {
    //         $('#img_box').css({
    //             'width': + (scroll * 1.2),
    //             'height': + (scroll * 1.2),
    //             'border-radius': '50%',
    //             'backgroundSize': 'cover'
    //         });
    //         $('#studioGhibli_write').css({
    //             'opacity': '0',
    //             'transition-delay': '0'
    //         });
    //         $('#scroll_info, #logo_img_white').css({
    //             'opacity': '0',
    //         });
    //         $('#howl').css({
    //             'bottom': '0%',
    //             'left': '-25%',
    //             'width': '150%'
    //         });
    //         $('.first_category,#language_icon,#language-korean,#logo_text').css({
    //             'color': '#00B6FF'
    //         });
    //         $('#logo_img_blue').css({
    //             'opacity': '1'
    //         });
    //     } else if (scroll > 1200 && scroll <= 3000) {
    //         $('#img_box').css({
    //             'width': '100vw',
    //             'height': '100vh',
    //             'border-radius': '0',
    //             'backgroundSize': 'cover'
    //         });
    //         $('#howl').css({
    //             'top': '20%',
    //             'left': '0%',
    //             'width': '100%'
    //         });
    //         $('#scroll_info,#logo_img_white,#img_box').css({
    //             'opacity': '1',
    //         });
    //         $('.first_category,#language_icon,#language-korean,#logo_text').css({
    //             'color': '#ffffff'
    //         });
    //         $('#logo_img_blue, #change_img_box, #change_img_text').css({
    //             'opacity': '0'
    //         });
    //         $('header').removeClass('header_blur');
    //     } else {
    
    //         $('#change_img_text').css({
    //             'opacity': '1',
    //             'fontSize': 30 + scroll / 500 + 'px'
    //         });
    //         $('#scroll_info,#logo_img_blue,#change_img_box').css({
    //             'opacity': '1',
    //         });
    //         $('#logo_img_white, #img_box').css({
    //             'opacity': '0',
    //         });
    //         $('.first_category,#language_icon,#language-korean,#logo_text').css({
    //             'color': '#00B6FF'
    //         });
    //         $('header').addClass('header_blur');
    //     }
    // });
    