const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamMobile = document.querySelector('.menu');


navEmail.addEventListener('click', toggleMenuDesktop);
menuHamMobile.addEventListener('click', toggleMobileDesktop);

function toggleMenuDesktop(){
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileDesktop(){
    menuMobile.classList.toggle('inactive');
}