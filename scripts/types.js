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
}

function undodisplaySideBar() {
    let event = document.getElementById("side-bar")
    event.style.display = "none"
}
let accessMainPage = document.getElementById("main-page")
let accessPlants = document.getElementById("plants")
let accessBlogs = document.getElementById("blogs")
let accessSupport = document.getElementById("support")

accessMainPage.addEventListener('mousemove', nodisplayIrrelevant)
accessPlants.addEventListener('mousemove', nodisplayIrrelevant)
accessBlogs.addEventListener('mousemove', nodisplayIrrelevant)
accessSupport.addEventListener('mousemove', nodisplayIrrelevant)

function nodisplayIrrelevant() {
    let event = document.getElementById("side-bar")
    event.style.display = "none"
    let event1 = document.getElementById("side-drawer")
    event1.style.display = "none"
}