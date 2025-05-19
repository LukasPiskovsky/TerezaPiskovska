// GSAP PLUGIN
gsap.registerPlugin(ScrollTrigger);

// VARIABLES
header = document.querySelector("header")
headingOne = document.querySelectorAll(".heading-one")
headingTwo = document.querySelector("#heading-two")
headingT = document.querySelector("#t")
headingP = document.querySelector("#p")
main = document.querySelector("main")
fromHeader = document.querySelector(".from-header")
aboutMe = document.getElementById("about-me")
aboutMeHeading = document.getElementById("about-me-heading")





// ANIMATIONS

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








gsap.from(fromHeader,{
    scrollTrigger:{
        trigger:main,
        start: "top 95%",
        end: "top 95%",
        toggleActions: "play none reset none",
    },
    // x: -1000,
    scale:0.6,
    duration:1,
    onStart: () => {
           aboutMeHeading.scrollIntoView({behavior:"smooth",block: "start"})
    }
})



// gsap.to("main", {
//   scrollTrigger: {
//     trigger: "header",
//     start: "bottom top",
//     onLeave: () => {
//       main.scrollIntoView({ behavior: "smooth" });
//     }
//   }
// });