let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  Navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  LoginForm.classList.remove('active');

}

let shoppingCart = document.querySelector(".shopping-cart")

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  Navbar.classList.remove('active');
  LoginForm.classList.remove('active');
  searchForm.classList.remove('active');
}

let LoginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
  LoginForm.classList.toggle('active');
  Navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}

let Navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  Navbar.classList.toggle('active');
  shoppingCart.classList.remove('active');
  LoginForm.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () => {
  Navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  LoginForm.classList.remove('active');
  searchForm.classList.remove('active');
}


var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
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
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
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


function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
  setInterval(loader, 1500);
}
window.onload = fadeOut;







function LogIn() {
  // const Name = document.getElementById("name").value;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password);
}



firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    document.getElementById("LOGIN").addEventListener("submit", (event) => {
      event.preventDefault()
  })
  
  
    // location.replace("index2.html")
    // document.getElementById("LOGIN").addEventListener("submit", (event) => {
    //   event.preventDefault()
    // })
    // document.getElementById("user-login").innerHTML = "Hello," + "Guest"
    // function guest() {
    //   document.getElementById("user-login").innerHTML = "Hello," + "Guest"
    //   // location.replace("index1.html")

    // }

    .catch(error)
    {
        document.getElementById("error").innerHTML=error.message;
    };
    // saveMessage(Name, email, password);
    // document.getElementById('SIGNUP').reset();


  }
  else {
    document.getElementById("LOGIN").innerHTML = `Hello,`+ `${user.email},`;//+`${<button>My Button</button>}`;
    // let LOGOUT=document.querySelector("#logout")
    // document.querySelector('logout').onclick=()=>{
    //   LOGOUT.classList.toggle('active');}


  }
})
firebase.auth().onAuthStateChanged((user) => {
  if(user){

  }
  else{
    
  }
})

function logout() {
  alert("Logout called");
  firebase.auth().signOut();
  location.reload();
}
