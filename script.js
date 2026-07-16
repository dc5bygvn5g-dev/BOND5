// ======================
// BOND5 Official Script
// ======================

// Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1800);
});

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior:"smooth"

    });

  });

});

// Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{

threshold:.15

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

// Hero Mouse Effect

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/60;

let y=(window.innerHeight/2-e.pageY)/60;

hero.style.backgroundPosition=`${x}px ${y}px`;

});

// Product Hover

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// Navbar Blur

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.9)";

}else{

header.style.background="rgba(0,0,0,.75)";

}

});

// Console Easter Egg

console.log("BOND5 • Built Through Connection");

// Footer Year

const year=new Date().getFullYear();

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML += `<p style="margin-top:15px;color:#777;">${year}</p>`;

}
