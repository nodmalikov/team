const elHamburgerMenu = document.querySelector('.js-hamburger-menu');
const elCloseIcon = document.querySelector('.js-close-icon');
const elHeaderInner = document.querySelector('.site-header__inner');

// MOBILE-OPEN-MENU
if (elHamburgerMenu) {
    elHamburgerMenu.addEventListener('click', function () {
        elHeaderInner.classList.add('open-menu');
    });
}

if (elCloseIcon) {
    elCloseIcon.addEventListener('click', function () {
        elHeaderInner.classList.remove('open-menu');
    });
}