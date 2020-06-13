var hamburgerBtnOpen = document.getElementById('hamburger-btn-open');
var hamburgerBtnClose = document.getElementById('hamburger-btn-close');
var bgLayer = document.querySelector(".hamburger-menu__bg-layer");

var links = [...document.querySelectorAll('.hamburger-menu__content .menu__link')];

[...links, hamburgerBtnOpen, hamburgerBtnClose, bgLayer].forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let hamburgerMenu = document.querySelector(".hamburger-menu");

        bgLayer.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        hamburgerBtnClose.classList.toggle('active');

        let bodyOverflow = window.getComputedStyle(document.body).overflow;
        if (bodyOverflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        
    });
});