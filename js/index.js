/* ------ Responsive Nav Bar ------ */
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

/* ------ Carousel ------ */

let slideIndex = 0;
let intervalPlay;
let currentAnimationClass;
let previousAnimationClass;

function increaseSlideIndex(n) {
    previousAnimationClass = currentAnimationClass;
    slideIndex += n;

    if (n > 0) {
        currentAnimationClass = "slide-to-right-animation";
    }
    else {
        currentAnimationClass = "slide-to-left-animation";
    }
    changeSlides(slideIndex);
}

function findCurrentSlide(index) {
    slideIndex = index;
    changeSlides(slideIndex);
}

function controlStopPlaySlides(playSlides) {
    previousAnimationClass = currentAnimationClass;
    if (playSlides) {
        currentAnimationClass = "slide-to-right-animation";
        changeSlides(slideIndex);
        intervalPlay = setInterval(increaseSlideIndex, 5000, 1);
    }
    else {
        clearInterval(intervalPlay);
    }
}

function changeSlides(index) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    else if (index >= slides.length || index == 'null' || index == 'undefined') {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove(previousAnimationClass);
        dots[i].classList.remove("fill-color");
    }
    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add(currentAnimationClass);
    dots[slideIndex].classList.add("fill-color");
}



/* ------ Accordion ------ */
function openAccordionContent() {
    var acc = document.getElementsByClassName("cert-accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active-acc-button");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

/* --- Window onload --- */
window.addEventListener("DOMContentLoaded", function () {
    controlStopPlaySlides(true);
    openAccordionContent();
}, false);

