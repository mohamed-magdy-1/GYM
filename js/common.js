

// onclick on the hamburger menu

let berger = document.querySelector('.menu .bars');
let abuetMenu = document.querySelector('header .abuet-menu');
let xMark = document.querySelector('header .xmark');
berger.onclick = function(){
    abuetMenu.style.display ="flex";

}

xMark.onclick = function(){
    abuetMenu.style.display ="none";

}



//reload

let reload = document.querySelector(".reload");

window.onload = function (){
    reload.style.display="none";
}