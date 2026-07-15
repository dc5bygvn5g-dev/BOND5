window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},1000);

},2200);

});

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x = (e.clientX / window.innerWidth - .5) * 20;

const y = (e.clientY / window.innerHeight - .5) * 20;

hero.style.transform =
`translate(${x}px,${y}px)`;

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
