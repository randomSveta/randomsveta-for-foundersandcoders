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
let playSlides = true;

function increaseNumberOfSlide(n) {
    slideIndex += n;
    console.log(slideIndex);
    changeSlides(slideIndex);
}

function findCurrentSlide(index) {
    slideIndex = index;
    changeSlides(slideIndex);
}

function changeSlides(index) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if (index < 0) {
        slideIndex = slides.length-1;
    }
    else if (index >= slides.length || index == 'null' || index == 'undefined') {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("fill-color");
    }
    console.log(slideIndex);
    slides[slideIndex].style.display = 'block';
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
window.onload = function () {
    changeSlides(0);
    openAccordionContent();
};