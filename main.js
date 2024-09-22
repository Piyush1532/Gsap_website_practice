const navbar=document.querySelector("#navbar")
const close=document.querySelector(".close")
const menu=document.querySelector(".menu")

menu.addEventListener("click",function(){
    navbar.classList.add("active")
})

close.addEventListener("click",function(){
    navbar.classList.remove("active")
})