const elHamburgerMenu = document.querySelector('.js-hamburger-menu');
const elCloseIcon = document.querySelector('.js-close-icon');
const elHeaderInner = document.querySelector('.site-header__inner');

const elsCardIcon = document.querySelectorAll('.card-directors__icon');
const elCardAfter = document.querySelectorAll('.card-directors__after');
const elCardSvg = document.querySelectorAll('.js-card-svg');

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

// CARD-TAP
elsCardIcon.forEach((elCardIcon, index) => {
    elCardIcon.addEventListener('click', function () {
        elCardAfter[index].classList.toggle('directors-card-opacity');
        elCardSvg[index].classList.toggle('directors-icon-rotate');
    })
})