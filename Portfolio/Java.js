    
function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

        if (menuBth.className === "nav-menu") {
            menuBth.ckassname += " responsive";
        } else{
            menuBth.className= "nav-menu"
        }
} 

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle_switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText",{
    strings: ["Suraj Roka","Suraj Roka", "Suraj Roka"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})