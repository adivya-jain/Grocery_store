let searchForm=document.querySelector('.search-form')

document.querySelector('#search-btn').onclick=()=>
{
searchForm.classList.toggle('active');
Navbar.classList.remove('active');
shoppingCart.classList.remove('active');
LoginForm.classList.remove('active');

}

let shoppingCart=document.querySelector(".shopping-cart")

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    Navbar.classList.remove('active');
    LoginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let LoginForm=document.querySelector('.login-form')

document.querySelector('#login-btn').onclick=()=>{
    LoginForm.classList.toggle('active');
    Navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

let Navbar=document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick=()=>{
    Navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll=()=>{
    Navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    searchForm.classList.remove('active');
}


var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
        0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });


  
var swiper = new Swiper(".reviews-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      disableOnInteraction:false
  },
  centeredSlides:true,
  breakpoints: {
      0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});

function loader()
{
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut()
{
  setInterval(loader,1500);
}
window.onload = fadeOut;
