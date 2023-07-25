/*hamburger menu*/
const hamburgerMenuBars = document.querySelectorAll('.hamburger_menu span');
const hamburgerMenu = document.getElementById('hamburger_menu_click')
hamburgerMenu.addEventListener('click', hamburgerMenuClick);

function hamburgerMenuClick() {
    hamburgerMenuBars.forEach(function(hamburgerMenuBar){
        hamburgerMenuBar.classList.toggle('active');
    });
} 
 
/*header*/