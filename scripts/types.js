let accessAnimalSection = document.getElementById("animal")
let accessSideDrawer = document.getElementById("side-drawer")

accessAnimalSection.addEventListener('mousemove', displaySideBar)
accessSideDrawer.addEventListener('mouseleave', undodisplaySideBar)
//console.log(accessAnimalSection)
function displaySideBar() {
    let event = document.getElementById("side-drawer")
    event.style.display = "block"
}
function undodisplaySideBar() {
    let event = document.getElementById("side-drawer")
    event.style.display = "none"
}