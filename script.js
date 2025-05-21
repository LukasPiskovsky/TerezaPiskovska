// GSAP PLUGIN
gsap.registerPlugin(ScrollTrigger);

// VARIABLES
const menu = document.getElementById("menu")
const logo = document.querySelector("#logo-link")
const lightBox = document.querySelector(".my-light-box")
const myImgs = document.querySelectorAll(".img-about-me")
const shownImg = document.querySelector(".shown-img")
const closeButton = document.querySelector(".close-button")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")
const navBar = document.querySelector("nav")
const header = document.querySelector("header")
const headingOne = document.querySelectorAll(".heading-one")
const headingTwo = document.querySelector("#heading-two")
const headingT = document.querySelector("#t")
const headingP = document.querySelector("#p")
const main = document.querySelector("main")
const slideFromHeader = document.querySelector(".slide-from-header")
const aboutMe = document.getElementById("about-me")
const aboutMeHeading = document.getElementById("about-me-heading")
const slideFromaboutMe = document.querySelector(".slide-from-about-me")
const services = document.getElementById("services")
const servicesHeading = document.getElementById("services-heading")
const slideFromServices = document.querySelector(".slide-from-services")
const contact = document.getElementById("contact")
const contactHeading = document.getElementById("contact-heading")
const anchors = document.querySelectorAll("ul li a")
const arrow = document.querySelectorAll(".arrow")
const serviceP = document.querySelectorAll(".service-p")


let isLinkClicked = false

//vh
function setRealVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setRealVh();
window.addEventListener('resize', setRealVh);


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

//Lightbox

myImgs.forEach((elem, index) =>{
    elem.addEventListener("click", () =>{
        lightBox.style.display = "grid"
        closeButton.style.display= "block"
        isLinkClicked = true
        shownImg.src = `img/${index+1}.jpg`
        // document.querySelector("body").style.overflow = 'hidden'
    })
})

closeButton.addEventListener("click", () => {
    lightBox.style.display = "none"
    closeButton.style.display= "none"
    // document.querySelector("body").style.overflow = '';
    isLinkClicked = false
})
//Funguje pouze pokud bude fotek min nez 10
prevButton.addEventListener("click", () =>{
    let src = shownImg.getAttribute("src")
    let num = src.substring(4, 5)
    if(num > 1){
        shownImg.src = myImgs[num-2].getAttribute("src")
    } else {
        shownImg.src = myImgs[myImgs.length -1].getAttribute("src")
    }
})

nextButton.addEventListener("click", ()=>{
    let src = shownImg.getAttribute("src")
    let num = src.substring(4, 5)
    if(num >= (myImgs.length)){
        shownImg.src = myImgs[0].getAttribute("src")
    } else{
        shownImg.src = myImgs[num].getAttribute("src")
    }
})

//Services

arrow.forEach((elem, index) => {
    let tween;

    function animate() {
        tween = gsap.to(elem, {
            bottom: 5,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "bounce.out"
        });
    }

    animate();

elem.addEventListener("click", () => {
    elem.classList.toggle("arrow-open");
    serviceP[index].classList.toggle("service-p-open");

    if (elem.classList.contains("arrow-open")) {
        tween.pause(); // pozastaví animaci
        gsap.set(elem,{bottom: -1})
    } else {
        tween.play(); // obnoví animaci
    }
});
});

//Contact
document.querySelector(".ig").addEventListener("mouseenter", () =>{
    document.querySelector(".ig").src = "img/instagram_color.png"
})

document.querySelector(".ig").addEventListener("mouseleave", () =>{
    document.querySelector(".ig").src = "img/instagram.png"
})

// ANIMATIONS

//header

let isHeaderAnimated = false
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
    isHeaderAnimated = true
    setTimeout(()=>{
        isHeaderAnimated = false
    },6000)
})

logo.addEventListener("click", () =>{
    if(!isHeaderAnimated){
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
        isHeaderAnimated = true
        setTimeout(() => {
            isHeaderAnimated = false
        }, 6000);
    }
})



//navBar Anchors -> disable scrollinto view
anchors.forEach((link) => {
    link.addEventListener("click", () =>{
        isLinkClicked = true
        setTimeout(()=>{
            isLinkClicked = false
        }, 500)
    })
})


let startEnd = window.innerWidth > 868 ? "top 90%" : "top 80%"
//to about me
    gsap.from(slideFromHeader,{
        scrollTrigger:{
            trigger:aboutMe,
            start: startEnd,
            end: startEnd,
            toggleActions: "play none reset none",
        },
        scale:0.6,
        duration:1,
        onStart: () => {
            if(!isLinkClicked){
                aboutMeHeading.scrollIntoView({behavior:"smooth",block: "start"})
            }
        }
    })

//to services
    gsap.from(slideFromaboutMe,{
        scrollTrigger:{
            trigger:services,
            start: startEnd,
            end: startEnd,
            toggleActions: "play none reset none",
        },
        scale:0.6,
        duration:1,
        onStart: () => {
            if(!isLinkClicked){
                servicesHeading.scrollIntoView({behavior:"smooth",block: "start"})
            }
            
        }
    })
//to contact
if(window.innerWidth > 868){
    let startEndtoContact = "top 60%"

    gsap.from(".contact-details",{
        scrollTrigger:{
            trigger:contact,
            start: startEndtoContact,
            end: startEndtoContact,
            toggleActions: "play none reset none",
        },
        scaleX:0,
        duration:1,
        delay:0.6,
    })
    gsap.from(".my-form",{
        scrollTrigger:{
            trigger:contact,
            start: startEndtoContact,
            end: startEndtoContact,
            toggleActions: "play none reset none",
        },
        scaleX:0,
        duration:1,
        delay:0.6
    })

    gsap.from(".map",{
        scrollTrigger:{
            trigger:contact,
            start: startEndtoContact,
            end: startEndtoContact,
            toggleActions: "play none reset none",
        },
        scaleY:0,
        duration:1,
        delay:0.9,
        // onStart: () => {
        //     if(!isLinkClicked){
        //         contactHeading.scrollIntoView({behavior:"smooth",block: "start"})
        //     }
        // }
    })
}


