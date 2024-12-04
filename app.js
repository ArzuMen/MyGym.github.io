window.onscroll = function func() {
  if (window.innerWidth > 992) {
    if (window.scrollY > 80) {
      document.querySelector(".img-text").style.display = "none";
      document.querySelector(".scroll").style.display = "flex";
    } else {
      document.querySelector(".img-text").style.display = "flex";
      document.querySelector(".scroll").style.display = "none";
    }

    if (window.scrollY > 350) {
      document.querySelector(".verev-nerqev").style.display = "flex";
    } else if (window.scrollY < 350) {
      document.querySelector(".verev-nerqev").style.display = "none";
    }
  }
};

var swiper3 = new Swiper(".mySwiper", {

  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".malenkiy1",
    prevEl: ".malenkiy2",
  },
});

var swiper1 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    100: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
    },

    992: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
  },
});

let ellips = document.querySelector(".media-right");
let x = document.getElementById("elips");
let deg = document.querySelector(".deg");
let b = 0;

document.querySelector(".media-right").addEventListener("click", () => {
  if (b == 0) {
    deg.className = "deg";
    b = 1;
  } else {
    deg.className = "x";
    b = 0;
  }
});

let menu = document.querySelector(".contanier");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let ul = document.querySelector(".ul");
let a = 0;

document.querySelector(".container").addEventListener("click", () => {
  if (a == 0) {
    bar1.classList.add("rotate");
    bar2.classList.add("dell");
    bar3.classList.add("rotate2");
    ul.className = "work";
    a = 1;
  } else {
    bar1.classList.remove("rotate");
    bar2.classList.remove("dell");
    bar3.classList.remove("rotate2");
    ul.className = "ul";

    a = 0;
  }
});
