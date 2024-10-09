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



gsap.from(".homeText",{
duration:1.5,
y:450,
opacity:0,
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

gsap.from(".provided .box",{
    opacity:0,
    duration:2,
    y:-120,
    stagger:0.5,
    scrollTrigger:{
        trigger:".provided .box",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        markers:true,
        scrub:2,
    }
})


gsap.from(".property .deBox .box",{
    opacity:0,
    y:300,
    duration:3,
    stagger:0.5,
    scrollTrigger:{
trigger:".deBox .box",
scroller:"body",
start:"top 80%",
end:"top 90%",
scrub:2,
    }
})
