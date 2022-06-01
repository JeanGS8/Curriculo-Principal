//  Mudando a cor do nav
var linksNav = document.querySelectorAll("nav a");

linksNav.forEach(function(link){
    link.addEventListener("mouseover", function(){
        this.style.transition = "0.5s";
        this.style.color = "#31393c";
        this.style.textDecoration = "underline";
    })
    link.addEventListener("mouseout", function(){
        this.style.transition = "0.5s";
        this.style.color = "white";
        this.style.textDecoration = "none";
    })
})



// Mudando a cor dos links do Main

var linksMain = document.querySelectorAll("main a");

linksMain.forEach(function(link){
    link.addEventListener("mouseover", function(){
        this.style.transition = "0.5s";
        this.classList.add("main-hover");
    })
    link.addEventListener("mouseout", function(){
        this.style.transition = "0.5s";
        this.classList.remove("main-hover");
    })
})