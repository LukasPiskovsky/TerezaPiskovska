// GSAP PLUGIN
gsap.registerPlugin(ScrollTrigger);

// VARIABLES
const header = document.querySelector("header")
const headingOne = document.querySelectorAll(".heading-one")
const headingTwo = document.querySelector("#heading-two")
const headingT = document.querySelector("#t")
const headingP = document.querySelector("#p")
const main = document.querySelector("main")
const fromHeader = document.querySelector(".from-header")
const aboutMe = document.getElementById("about-me")
const aboutMeHeading = document.getElementById("about-me-heading")
const menu = document.getElementById("menu")
const navBar = document.querySelector("nav")

//Menu



menu.addEventListener("click", () =>{
    navBar.classList.toggle("open")
    let isOpen = navBar.classList.contains("open")
    menu.src = isOpen ? "img/close.svg" : "img/menu.svg"
    document.querySelectorAll("nav a").forEach(link => {link.addEventListener("click", () =>{
        navBar.classList.remove("open")
        menu.src = "img/menu.svg"
    })})
})




// ANIMATIONS

//header
window.addEventListener("DOMContentLoaded", () =>{
    gsap.from("#t", {
        x: "250%",
        duration:2.5,
        delay:1,
        scale:2,
        ease: "power3"
    })
    gsap.from("#p", {
        x: "-220%",
        y:-30,
        duration:2.5,
        delay:1,
        scale:2,
        ease: "power3"
    })

    gsap.from(headingOne, {
        opacity:0,
        duration:4,
        delay:1.5,
        ease: "power2"
    })

    gsap.from(headingTwo, {
        x:"-50%",
        duration:2,
        delay:1,
        ease: "power2"
    })
})

//to about me
if (window.innerWidth > 868){
    gsap.from(fromHeader,{
        scrollTrigger:{
            trigger:main,
            start: "top 90%",
            end: "top 90%",
            toggleActions: "play none reset none",
        },
        // x: -1000,
        scale:0.6,
        duration:1,
        onStart: () => {
            aboutMeHeading.scrollIntoView({behavior:"smooth",block: "start"})
        }
    })
} else {
        gsap.from(fromHeader,{
        scrollTrigger:{
            trigger:main,
            start: "top 80%",
            end: "top 80%",
            toggleActions: "play none reset none",
        },
        // x: -1000,
        scale:0.6,
        duration:1,
        onStart: () => {
            aboutMeHeading.scrollIntoView({behavior:"smooth",block: "start"})
        }
    })
}