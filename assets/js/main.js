const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navItems = document.querySelectorAll(".nav__item");
const header = document.getElementById("header");

// Change nav toggle icon based on menu state
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Open / close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// Close the menu when a nav link is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
    changeIcon();
  });
});

// Header shadow/shrink on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("header--scroll", window.scrollY > 40);
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .certification__item, .service__card, .project__content, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

// Typewriter effect
const typewriterTexts = [
  "Backend Developer",
  "Full Stack Web Developer",
  "System Design Enthusiast",
];
const typewriterElement = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = typewriterTexts[textIndex];
  let delay = deleting ? 50 : 100;

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  typewriterElement.textContent = currentText.slice(0, charIndex);

  if (!deleting && charIndex === currentText.length) {
    deleting = true;
    delay = 2000; // pause on the full word
  } else if (deleting && charIndex === 0) {
    deleting = false;
    textIndex = (textIndex + 1) % typewriterTexts.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.querySelector(".footer__copyright");
  if (copyright) {
    copyright.textContent = copyright.textContent.replace(
      "{currentYear}",
      new Date().getFullYear()
    );
  }
});
