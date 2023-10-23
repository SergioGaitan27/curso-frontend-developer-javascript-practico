const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamMobile = document.querySelector('.menu');
const menuCarrito = document.querySelector('.product-detail');
const iconoCarrito = document.querySelector('.navbar-shopping-cart');


navEmail.addEventListener('click', toggleMenuDesktop);
menuHamMobile.addEventListener('click', toggleMobileDesktop);
iconoCarrito.addEventListener('click', toggleMenuCarrito);

function toggleMenuDesktop(){
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileDesktop(){
    if(!menuCarrito.classList.contains('inactive')){
        menuCarrito.classList.toggle('inactive');
    }
    menuMobile.classList.toggle('inactive');
    
}

function toggleMenuCarrito(){
    if(!menuMobile.classList.contains('inactive')){
        menuMobile.classList.toggle('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}