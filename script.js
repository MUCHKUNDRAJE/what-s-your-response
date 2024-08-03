var no =document.querySelector("#no")
var yes =document.querySelector("#yes");
var img=document.querySelector("#img");
var invisible = document.querySelector("#invisible");
var pop = document.querySelector("#pop");
var popup = document.querySelector("#popup");
var popupi = document.querySelector("#hello");


random = parseInt(Math.random()*300);

invisible.style.transition="all ease 0.5s"
pop.style.transition="all ease 0.5s"
no.addEventListener("mouseenter",function(){
    var randomX = (Math.random() * 600) - 300;
    var randomY = (Math.random() * 600) - 300;
    console.log(random);
   no.style.transform = `translate(${randomX}px,${randomY}px)`
})

yes.addEventListener("mouseenter",function(){
    img.style.opacity = "1";
    invisible.style.opacity = "1"
    pop.style.transform="scale(1)";

})
yes.addEventListener("mouseleave",function(){
    img.style.opacity = "0";
        pop.style.transform='scale(0)'
    invisible.style.opacity="0"
})

yes.addEventListener("click",function()
{
    popup.style.display="block"
})
popupi.addEventListener("click",function()
{
    popup.style.display="none"
})