// increment the number rapidly

const num = document.querySelectorAll(".integer-number");
const speed = 100;
num.forEach((el) => {
  incElement(el);
});

function incElement(elem) {
  let text = +elem.innerText;
  const v = +elem.getAttribute("value");
  const inc = v / speed;

  if (text < v) {
    elem.innerText = Math.trunc(inc) + text;
    setTimeout(() => {
      incElement(elem);
    }, 10);
  } else {
    elem.innerText = v;
  }
}

// Menu fade during hover
const nav = document.querySelector(".main-nav");

const handleHover = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");
    const logoDev = link.closest(".main-nav").querySelector("span");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logoDev.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Smooth scroling on sections

document.querySelector(".nav__item").addEventListener("click", function (e) {
  if (e.target.classList.contains(".main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// tab up and down

const tab = document.querySelectorAll(".project_tab");
const tabsContainer = document.querySelector(".project__tab-container");
const tabscontent = document.querySelectorAll(".project_content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".project_tab");
  if (!clicked) return;
  tab.forEach((t) => t.classList.remove("project_tab-active"));
  tabscontent.forEach((c) => c.classList.remove("project-content-active"));

  clicked.classList.add("project_tab-active");
  document
    .querySelector(`.project_content-${clicked.dataset.tab}`)
    .classList.add("project-content-active");
});

// Sliding component
const slides = document.querySelectorAll(".slider-box");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const Maxlen = slides.length;

const gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    // -100% 0% 100% 200%
  });
};

gotoSlide(0);

const nextSlide = function () {
  if (curSlide === Maxlen - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
  activedot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = Maxlen - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
  activedot(curSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

// for key Press on slider
document.addEventListener("keydown", function (e) {
  // console.log(e);
  // KeyboardEvent {isTrusted: true, key: 'ArrowDown', code: 'ArrowDown', location: 0, ctrlKey: false, …}
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// focus on dots
const dotContainer = document.querySelector(".dots");

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    gotoSlide(slide);
    activedot(slide);
  }
});

const activedot = function (slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot-active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot-active");
};

activedot(0);

// pop up
const popup = document.getElementById("pop-up");
const overlay = document.querySelector(".overlay");
const btnok = document.querySelector(".btn-ok");

const submit = document.querySelector(".submit-btn");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnok.addEventListener("click", function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
});
