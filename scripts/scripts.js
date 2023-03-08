let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let autoslideIndex = 0;
autoshowSlides();

function autoshowSlides() {
    let i;
    let autoslides = document.getElementsByClassName("mySlide");
    for (i = 0; i < autoslides.length; i++) {
        autoslides[i].style.display = "none";
    }
    autoslideIndex++;
    if (autoslideIndex > autoslides.length) {autoslideIndex = 1}
    autoslides[autoslideIndex-1].style.display = "block";
    setTimeout(autoshowSlides, 5000); // Change image every 5 seconds
} 

let autodotsIndex = 0;
autoshowDots();

function autoshowDots() {
    let i;
    let autodots = document.getElementsByClassName("dot");
    for (i = 0; i < autodots.length; i++) {
        autodots[i].className = autodots[i].className.replace(" active", "");
    }
    autodotsIndex++;
    if (autodotsIndex > autodots.length) {
        autodotsIndex = 1;
    }
    autodots[autodotsIndex-1].className += " active";
    setTimeout(autoshowDots, 5000)
}

let accessAnimalSection = document.getElementById("animal")
let accessSideDrawer = document.getElementById("side-drawer")


accessAnimalSection.addEventListener('mousemove', displaySideDrawer)
accessSideDrawer.addEventListener('mouseleave', undodisplaySideDrawer)
//console.log(accessAnimalSection)
function displaySideDrawer() {
    let event = document.getElementById("side-drawer")
    event.style.display = "block"
    let event1 = document.getElementById("side-bar")
    event1.style.display = "none"
    let event2 = document.getElementById("plant-side-drawer")
    event2.style.display = "none"
}
function undodisplaySideDrawer() {
    let event = document.getElementById("side-drawer")
    event.style.display = "none"
}

let accessMenuButton = document.getElementById("menu-btn")
let accessSideBar = document.getElementById("side-bar")

accessMenuButton.addEventListener('mousemove', displaySideBar)
accessSideBar.addEventListener('mouseleave', undodisplaySideBar)

function displaySideBar() {
    let event = document.getElementById("side-bar")
    event.style.display = "block"
    let event1 = document.getElementById("side-drawer")
    event1.style.display = "none"
    let event2 = document.getElementById("plant-side-drawer")
    event2.style.display = "none"
}

function undodisplaySideBar() {
    let event = document.getElementById("side-bar")
    event.style.display = "none"
}

let accessPlantSection = document.getElementById("plants")
let accessPlantSideDrawer = document.getElementById("plant-side-drawer")

accessPlantSection.addEventListener('mousemove', displayPlantSideDrawer)
accessPlantSideDrawer.addEventListener('mouseleave', undodisplayPlantSideDrawer)

function displayPlantSideDrawer() {
    let event = document.getElementById("plant-side-drawer")
    event.style.display = "block"
    let event1 = document.getElementById("side-bar")
    event1.style.display = "none"
    let event2 = document.getElementById("side-drawer")
    event2.style.display = "none"
}
function undodisplayPlantSideDrawer() {
    let event = document.getElementById("plant-side-drawer")
    event.style.display = "none"
}

let accessMainPage = document.getElementById("main-page")
let accessBlogs = document.getElementById("blogs")
let accessSupport = document.getElementById("support")

accessMainPage.addEventListener('mousemove', nodisplayIrrelevant)
accessBlogs.addEventListener('mousemove', nodisplayIrrelevant)
accessSupport.addEventListener('mousemove', nodisplayIrrelevant)

function nodisplayIrrelevant() {
    let event = document.getElementById("side-bar")
    event.style.display = "none"
    let event1 = document.getElementById("side-drawer")
    event1.style.display = "none"
    let event2 = document.getElementById("plant-side-drawer")
    event2.style.display = "none"
}