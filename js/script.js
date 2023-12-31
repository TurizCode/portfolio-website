// NAVBAR - MEDIA QUERY: HAMBURGER NAVBAR
function toggleMenu() {
  const menu = document.querySelector(".hamburger-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var tabLinks = document.getElementsByClassName("tab-links");
var tabDetails = document.getElementsByClassName("tab-details");

// ABOUT: OVERRIDE TAB DESCRIPTION | USING SUB-NAVBAR
function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabDetail of tabDetails) {
    tabDetail.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// NAVBAR: ACTIVE LINK ON SCROLL
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("ul li a");
let hamLinks = document.querySelectorAll(".hamburger-menu li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active-nav");
        document
          .querySelector("ul li a[href*=" + id + "]")
          .classList.add("active-nav");
      });
      hamLinks.forEach((link) => {
        link.classList.remove("active-link");
        document
          .querySelector(".hamburger-menu li a[href*=" + id + "]")
          .classList.add("active-link");
      });
    }
  });
};

// PROJECTS - Carousel
const slideContainer = document.querySelector("slideshow-container");
// const notClicked = slideContainer.addEventListener();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// Get the input field
const input = document.getElementById("contact-form");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn-form").click();
  }
});

// Sending a Data from Form to Gmail
const form = document.getElementById("contact-form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${userName.value}\nMessage: ${userMessage.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "turizcode@gmai.com",
    Password: "2B8405DA72170EFD224B8F2A3D412B72EF73",
    To: "turizcode@gmail.com",
    From: userEmail.value,
    Subject: "Message From your Portfolio",
    Body: bodyMessage,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
