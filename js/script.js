// NAVBAR - MEDIA QUERY: HAMBURGER NAVBAR
function toggleMenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var tabLinks = document.getElementsByClassName("tab-links");
var tabDetails = document.getElementsByClassName("tab-details");

// ABOUT: OVERRIDE TAB DESCRIPTION | USING SUB-NAVBAR
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

// NAVBAR: ACTIVE LINK ON SCROLL
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a');
let hamLinks = document.querySelectorAll('.hamburger-menu li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-nav');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active-nav');
            });
            hamLinks.forEach(link => {
                link.classList.remove('active-link');
                document.querySelector('.hamburger-menu li a[href*=' + id + ']').classList.add('active-link');
            });
        };
    });
};