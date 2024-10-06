const navbar=document.querySelector("#navbar")
const close=document.querySelector(".close")
const menu=document.querySelector(".menu")

menu.addEventListener("click",function(){
    navbar.classList.add("active")
})

close.addEventListener("click",function(){
    navbar.classList.remove("active")
})


//gsap code start 
let timeLine=gsap.timeline()


timeLine.from(".logo img",{
    opacity:0,
    duration:0.5,
    y:-190
})



gsap.from(".homeText",{
duration:1,
y:400,
opacity:0
}
)



gsap.from(".contsection .contactUs",{
    opacity:0,
    y:300,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".contsection .contactUs",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
       toggleActions:"play none none none",
    scrub:2
        
    }
})

gsap.from(".contactUs .text",{
    opacity:0,
    x:400,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".contactUs",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:1,
        // markers:true
    }
})



gsap.from(".deBox .box",{
    opacity:0,
    y:200,
    duration:2,
    scrollTrigger:{
trigger:".deBox",
scroller:"body",

start:"top 80%",
end:"top 90%",
scrub:2,

    }
})
