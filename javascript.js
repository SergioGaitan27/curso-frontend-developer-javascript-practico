const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop(){
    console.log('Click de la función');
    menuDesktop.classList.toggle('inactive');
}