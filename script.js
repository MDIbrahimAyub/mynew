var content = document.querySelector(".page1-t")
var cursor = document.querySelector(".cursor")
var cursor1 = document.querySelector(".cursor1")
var page5 = document.querySelector(".page5")

content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
})
content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})


gsap.from(".page2-t h1,.page2-t h3",{
    y:50,
    delay:0.30,
    duration:0.50,
    opacity:0,
    scrollTrigger:".page2"
})
gsap.from(".page2 h2",{
    y:50,
    delay:0.50,
    duration:0.70,
    opacity:0,
    scrollTrigger:".page2"
})
gsap.from(".page3-t h1",{
    y:50,
    delay:0.50,
    duration:0.50,
    opacity:0,
    scrollTrigger:".page3-t"
})
gsap.from(".page6 h1",{
    y:50,
    delay:0.50,
    duration:0.50,
    opacity:0,
    scrollTrigger:".page6"
})
gsap.from(".page6 h2",{
    y:50,
    delay:0.80,
    duration:0.50,
    opacity:0,
    scrollTrigger:".page6"
})
gsap.from(".logo h1,.logo h3",{
    y:50,
    delay:0.30,
    duration:0.50,
    stagger:0.28
})
