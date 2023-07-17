const mobil_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar=()=>{
    // alert("hello")
    nav_header.classList.toggle("active")
}

mobil_nav.addEventListener("click",()=> toggleNavbar());
