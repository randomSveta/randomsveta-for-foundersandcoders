function navbarToggle() {
    let elem = document.getElementById("navbar-top");

    if (elem.className === "navigation-bar") {
        elem.className += " responsive";
    } else {
        elem.className = "navigation-bar";
    }
    let icon = document.getElementById("menu-icon");
    if (icon.className.includes('fa-bars')) {
        icon.className = "fa fa-times"
    }
    else {
        icon.className = "fa fa-bars"
    }
}

let slideIndex = 0;
let playSlides = true;


function plusNumberOfSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function play() {
    playSlides = true;
    setTimeout(function () { showSlides(slideIndex) }, 2000);
}

function stop() {
    playSlides = false;
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (playSlides) {
        play();
        slideIndex++;
    }

    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" fill-color", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " fill-color";


}

function openAccordionContent() {
    var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-acc-button");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
}


window.onload = function () {
    showSlides(slideIndex);
    openAccordionContent();
};