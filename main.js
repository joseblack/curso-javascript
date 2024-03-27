const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cartsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktoMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarIcon);

function toggleDesktoMenu() {
    const isProductDetailClosed =shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
       shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed =shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
       shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarIcon() {
    const isMovilMenuClosed = mobileMenu.classList.contains('inactive');
    const isDeskTopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMovilMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDeskTopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

   shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    imageToCar: './icons/bt_add_to_cart.svg'
});

productList.push({
    name: 'Pantalla LCD 40p',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    imageToCar: './icons/bt_add_to_cart.svg'
});

productList.push({
    name: 'Computador Asus',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    imageToCar: './icons/bt_add_to_cart.svg'
});

productList.push({
    name: 'Nevera',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    imageToCar: './icons/bt_add_to_cart.svg'
});

for (const product of productList) {

    const productCar = document.createElement('div');
    productCar.classList.add('product-card');
    
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const div = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
   
    const figure = document.createElement('figure');
    const imgAddToCar = document.createElement('img');
    imgAddToCar.setAttribute('src', product.imageToCar); 
    
    productCar.appendChild(img);
    productCar.appendChild(productInfo);
    productInfo.appendChild(div);
    productInfo.appendChild(figure);
    div.appendChild(productPrice);
    div.appendChild(productName);
    figure.appendChild(imgAddToCar);
    cartsContainer.appendChild(productCar);
}