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

let slideIndex = 1
autoShowSlides(slideIndex)

function autoShowSlides() {
    let i
    let autoSlides = document.getElementsByClassName('highlightSlide')
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > autoSlides.length) {slideIndex = 1}
    autoSlides[slideIndex-1].style.display = "block";
    setTimeout(autoShowSlides, 5000);
}
let autodotsIndex = 1;
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