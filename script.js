"strict";
// mob nav
const navBar = function () {
  const btnMobNav = document.querySelector(".burger");
  const mobNav = document.querySelector(".mob__nav");
  const overflow = document.querySelector(".overflow");
  const showNav = function () {
    mobNav.classList.remove("hide");
    overflow.classList.remove("hide");
    document.querySelector("body").style.overflowY = "hidden";
    btnMobNav.src = "images/icon-close.svg";
  };
  const hideNav = function () {
    mobNav.classList.add("hide");
    overflow.classList.add("hide");
    document.querySelector("body").style.overflowY = "visible";
    btnMobNav.src = "images/icon-hamburger.svg";
  };
  btnMobNav.addEventListener("click", function () {
    if (mobNav.classList.contains("hide")) showNav();
    else hideNav();
  });
  overflow.addEventListener("click", function () {
    hideNav();
  });
};
navBar();

//Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const sliderContainer = document.querySelector(".showcase_slider");
  let curSlide = 0;
  const dotContainer = document.querySelector(".dots");
  const maxSlide = slides.length - 1;

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  ///Event handlers

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

const mailVerification = function () {
  const btnMail = document.querySelector(".btn_mail");
  const mailErrorMsg = document.querySelector(".mail_error");
  const mailSubmit = document.querySelector(".mail_input");

  btnMail.addEventListener("click", function (e) {
    e.preventDefault();
    const email = mailSubmit.value;

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).toLowerCase())) {
      mailSubmit.value = "";
      mailErrorMsg.classList.add("hidden");
      mailSubmit.placeholder = "Updates in your inbox...";
      console.log(email);
    } else {
      mailErrorMsg.classList.remove("hidden");
      mailSubmit.value = "";
      mailSubmit.placeholder = "Please inser valid mail.";
    }
  });
};

mailVerification();
