let scroolbar=document.querySelector('.gallery')
let leftbtn=document.getElementById("leftbtn")
let rightbtn=document.getElementById("rightbtn")

scroolbar.addEventListener("wheel",(evt)=>{
    evt.preventDefault()
    scroolbar.style.scrollBehavior="auto"
    scroolbar.scrollLeft += evt.deltaY
})

rightbtn.addEventListener("click",()=>{
    scroolbar.style.scrollBehavior="smooth"
    scroolbar.scrollLeft +=900
})

leftbtn.addEventListener("click",()=>{
    scroolbar.style.scrollBehavior="smooth"
    scroolbar.scrollLeft += -900
})