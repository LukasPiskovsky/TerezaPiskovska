// GSAP PLUGIN
gsap.registerPlugin(ScrollTrigger);

// VARIABLES
header = document.querySelector("header")
fromHeader = document.querySelector("#from-header")

// ANIMATIONS
gsap.set("#from-header",{
    y: "-100%"
})

gsap.to("#from-header",{
    scrollTrigger:{
        trigger:"#from-header",
        start: "top 90%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        scrub:true,
        markers:true
    },
    y:"0%"
})