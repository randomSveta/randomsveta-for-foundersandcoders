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
/* ------ Add active-nav-item class to Nevigation ------ */
/* --- Add active-nav-item class to Nevigation onclick --- */
let allowScroll = true;

function addActiveClassToNavbarItem(callback) {
    allowScroll = false;

    document.querySelectorAll('.underscore-nav-item a.active-nav-item').forEach((link) =>
        link.classList.remove('active-nav-item')
    )
    event.target.classList.add("active-nav-item");

  setTimeout( changeScrollStatus, 1000); //temporary solution
};

function changeScrollStatus(){
        allowScroll = true; 
};


/* --- Add active-nav-item class to Nevigation onscroll ——— */

function addActiveClassToNavbarItemOnscroll() {
    
 if(allowScroll) {
    document.querySelectorAll('a.active-nav-item').forEach((link) =>
    link.classList.remove('active-nav-item')
);

const navigationBar = document.getElementById('navbar-top');
const navBarHeight = navigationBar.getBoundingClientRect().height;

const sectionAboutMe = document.getElementById('about-me');
const aboutmeTopBorder = sectionAboutMe.getBoundingClientRect().top;

const sectionBootcampPre = document.getElementById('bootcamp-prerequisites');
const bootcamppreTopBorder = sectionBootcampPre.getBoundingClientRect().top;

const sectionCarousel = document.getElementById('carousel');
const carouselTopBorder = sectionCarousel.getBoundingClientRect().top;

const sectionSkills = document.getElementById('skills');
const skillsTopBorder = sectionSkills.getBoundingClientRect().top;

const sectionContactMe = document.getElementById('contact-me');
const contactmeTopBorder = sectionContactMe.getBoundingClientRect().top;

if (navBarHeight < aboutmeTopBorder && window.location.hash && event != 'click') {
  window.location.hash = ''
}
if (navBarHeight >= aboutmeTopBorder && navBarHeight < bootcamppreTopBorder) {
    document.querySelectorAll('a.active-nav-item').forEach((link) =>
        link.classList.remove('active-nav-item')
    );
    document.getElementById('nav-aboutme').classList.add('active-nav-item');
    if (!window.location.hash) {
      window.location.hash = '#about-me'
    }
    else if (!window.location.hash.includes('about-me')) {
      window.location.hash = '#about-me'
    }
}
if (navBarHeight >= bootcamppreTopBorder && navBarHeight < carouselTopBorder) {
    document.querySelectorAll('a.active-nav-item').forEach((link) =>
        link.classList.remove('active-nav-item')
    );
    document.getElementById('nav-bootcamppre').classList.add('active-nav-item');
    if (!window.location.hash.includes('bootcamp-prerequisites')) {
       window.location.hash = '#bootcamp-prerequisites';
    }

}
if (navBarHeight >= carouselTopBorder && navBarHeight < skillsTopBorder) {
    document.querySelectorAll('a.active-nav-item').forEach((link) =>
        link.classList.remove('active-nav-item')
    );
    document.getElementById('nav-carousel').classList.add('active-nav-item');
    if (!window.location.hash.includes('carousel')) {
      window.location.hash = '#carousel';
    }
}

if (navBarHeight >= skillsTopBorder && navBarHeight < contactmeTopBorder) {
    document.querySelectorAll('a.active-nav-item').forEach((link) =>
        link.classList.remove('active-nav-item')
    );

    document.getElementById('nav-skills').classList.add('active-nav-item');
    if (!window.location.hash.includes('skills')) {
      window.location.hash = '#skills';
    }

}
if (navBarHeight >= contactmeTopBorder) {
    document.querySelectorAll('a.active-nav-item').forEach((link) =>
        link.classList.remove('active-nav-item')
    );
    document.getElementById('nav-contactme').classList.add('active-nav-item');
    if (!window.location.hash.includes('contact-me')) {
      window.location.hash = '#contact-me';
    }
}
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
window.addEventListener("DOMContentLoaded", () => {
    controlStopPlaySlides(true);
    openAccordionContent();
}, false);

window.addEventListener("scroll", () => {
    addActiveClassToNavbarItemOnscroll();
});
