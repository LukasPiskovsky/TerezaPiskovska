// GSAP PLUGIN
gsap.registerPlugin(ScrollTrigger);

// VARIABLES
header = document.querySelector("header")
headingOne = document.querySelectorAll(".heading-one")
headingTwo = document.querySelector("#heading-two")
headingT = document.querySelector("#t")
headingP = document.querySelector("#p")
main = document.querySelector("main")
fromHeader = document.querySelector("#from-header")





// ANIMATIONS

window.addEventListener("DOMContentLoaded", () =>{
    gsap.from("#t", {
        x: "200%",
        duration:2.5,
        delay:1,
        scale:2,
        ease: "power3"
    })
    gsap.from("#p", {
        x: "-200%",
        y:-30,
        duration:2.5,
        delay:1,
        scale:2,
        ease: "power3"
    })

    gsap.from([headingTwo,headingOne], {
        opacity:0,
        duration:4,
        delay:1.5,
        ease: "power2"
    })
})








gsap.from(fromHeader,{
    scrollTrigger:{
        trigger:fromHeader,
        start: "top 90%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        scrub:true,
        // markers:true
    },
    y:-10
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