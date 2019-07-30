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

let slideIndex = 1;
window.onload = function() {
    showSlides(slideIndex);
  };

function plusNumberOfSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" fill-color", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " fill-color";
}