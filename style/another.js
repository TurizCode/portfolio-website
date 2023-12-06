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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// -----------------------------------------------------------------

let indexSlide = 1;
tunjukanSlides(indexSlide);

// Next/previous controls
function tambahSlides(n) {
  tunjukanSlides((indexSlide += n));
}

// Thumbnail image controls
function slideSekarang(n) {
  tunjukanSlides((indexSlide = n));
}

function tunjukanSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideSaya");
  let dots = document.getElementsByClassName("titik");
  if (n > slides.length) {
    indexSlide = 1;
  }
  if (n < 1) {
    indexSlide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[indexSlide - 1].style.display = "block";
  dots[indexSlide - 1].className += " active";
}

tunjukanSlides();

function tunjukanSlides() {
  let i;
  let slides = document.getElementsByClassName("slideSaya");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(tunjukanSlides, 4000); // Change image every 2 seconds
}
