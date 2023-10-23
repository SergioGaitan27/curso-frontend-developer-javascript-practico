const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamMobile = document.querySelector('.menu');
const menuCarrito = document.querySelector('.product-detail');
const iconoCarrito = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


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

let productList = [];

productList.push({
    name: 'Bici',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 5000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Televisión',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

tarjetasProductos(productList);

function tarjetasProductos(productos){
    for(producto of productos){

        let producCard = document.createElement('div');
        producCard.classList.add('product-card');

        let imgProducto = document.createElement('img');
        imgProducto.setAttribute('src', producto.image);  

        let productCardInfo = document.createElement('div');
        productCardInfo.classList.add('product-info');

        let descriptionCard = document.createElement('div');
        let priceCard = document.createElement('p');
        priceCard.innerText = '$' + producto.price;
        let nameCard = document.createElement('p');
        nameCard.innerText = producto.name;
        descriptionCard.appendChild(priceCard);
        descriptionCard.appendChild(nameCard);

        let imgCard = document.createElement('figure');
        let imgCarrito = document.createElement('img');
        imgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgCard.appendChild(imgCarrito);

        productCardInfo.appendChild(descriptionCard);
        productCardInfo.appendChild(imgCard);

        producCard.appendChild(imgProducto);
        producCard.appendChild(productCardInfo);

        cardsContainer.appendChild(producCard);
    }
}
