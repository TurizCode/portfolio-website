function toggleMenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var tabLinks = document.getElementsByClassName("tab-links");
var tabDetails = document.getElementsByClassName("tab-details");

function openTab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabDetail of tabDetails) {
        tabDetail.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}