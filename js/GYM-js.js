//header
let header = document.getElementById('header');






// scroll sections avtive link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll('header .div a');

window.onscroll = () =>{
    // sections.forEach( sec =>{
    //     let top = sec.scrollY;
    //     let offset = sec.offsetTop - 150;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id');
    //     if(top >= offset && top < offset + height){
    //         navLinks.forEach(links =>{
    //             links.classList.remove('active')
    //             document.querySelector('header .div a[href*=' + id + ']').classList.add('active');
    //         });
    //     };
    // });

    ///////////////////
    if(this.scrollY > 0){
        header.style.background="#e91e631f";
        header.style.backdropFilter="blur(10px)"
    }else{
        header.style.background="none";
        header.style.backdropFilter="none"
    };
};

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






// TRAINERS part 

let name1 = document.querySelector(".people-name-1");
let name2 = document.querySelector(".people-name-2");
let name3 = document.querySelector(".people-name-3");

let trns1 = document.querySelector(".trns-1");
let trns2 = document.querySelector(".trns-2");
let trns3 = document.querySelector(".trns-3");




name1.onclick = function(){

    trns1.classList.remove("none");
    trns2.classList.add("none");
    trns3.classList.add("none");

    name1.classList.add('actiet');
    name2.classList.remove("actiet");
    name3.classList.remove("actiet");

};

name2.onclick = function(){

    trns1.classList.add("none");
    trns2.classList.remove("none");
    trns3.classList.add("none");


    name1.classList.remove('actiet');
    name2.classList.add("actiet");
    name3.classList.remove("actiet");

};

name3.onclick = function(){

    trns1.classList.add("none");
    trns2.classList.add("none");
    trns3.classList.remove("none");

    name1.classList.remove('actiet');
    name2.classList.remove("actiet");
    name3.classList.add("actiet");

};






// dey Dates




let dey1 =document.querySelector(".dey-1");
let dey2 =document.querySelector(".dey-2");
let dey3 =document.querySelector(".dey-3");
let dey4 =document.querySelector(".dey-4");
let dey5 =document.querySelector(".dey-5");
let dey6 =document.querySelector(".dey-6");
let dey7 =document.querySelector(".dey-7");

let tbody1 =document.querySelector(".tbody-1");
let tbody2 =document.querySelector(".tbody-2");
let tbody3 =document.querySelector(".tbody-3");
let tbody4 =document.querySelector(".tbody-4");
let tbody5 =document.querySelector(".tbody-5");
let tbody6 =document.querySelector(".tbody-6");
let tbody7 =document.querySelector(".tbody-7");


dey1.onclick = function(){

    tbody1.classList.remove("none");
    tbody2.classList.add("none");
    tbody3.classList.add("none");
    tbody4.classList.add("none");
    tbody5.classList.add("none");
    tbody6.classList.add("none");
    tbody7.classList.add("none");


    dey1.classList.add('dey');
    dey2.classList.remove("dey");
    dey3.classList.remove("dey");
    dey4.classList.remove("dey");
    dey5.classList.remove("dey");
    dey6.classList.remove("dey");
    dey7.classList.remove("dey");


};
dey2.onclick = function(){

    tbody1.classList.add("none");
    tbody2.classList.remove("none");
    tbody3.classList.add("none");
    tbody4.classList.add("none");
    tbody5.classList.add("none");
    tbody6.classList.add("none");
    tbody7.classList.add("none");


    dey1.classList.remove('dey');
    dey2.classList.add("dey");
    dey3.classList.remove("dey");
    dey4.classList.remove("dey");
    dey5.classList.remove("dey");
    dey6.classList.remove("dey");
    dey7.classList.remove("dey");


};
dey3.onclick = function(){

    tbody1.classList.add("none");
    tbody2.classList.add("none");
    tbody3.classList.remove("none");
    tbody4.classList.add("none");
    tbody5.classList.add("none");
    tbody6.classList.add("none");
    tbody7.classList.add("none");


    dey1.classList.remove('dey');
    dey2.classList.remove("dey");
    dey3.classList.add("dey");
    dey4.classList.remove("dey");
    dey5.classList.remove("dey");
    dey6.classList.remove("dey");
    dey7.classList.remove("dey");


};
dey4.onclick = function(){

    tbody1.classList.add("none");
    tbody2.classList.add("none");
    tbody3.classList.add("none");
    tbody4.classList.remove("none");
    tbody5.classList.add("none");
    tbody6.classList.add("none");
    tbody7.classList.add("none");


    dey1.classList.remove('dey');
    dey2.classList.remove("dey");
    dey3.classList.remove("dey");
    dey4.classList.add("dey");
    dey5.classList.remove("dey");
    dey6.classList.remove("dey");
    dey7.classList.remove("dey");


};
dey5.onclick = function(){

    tbody1.classList.add("none");
    tbody2.classList.add("none");
    tbody3.classList.add("none");
    tbody4.classList.add("none");
    tbody5.classList.remove("none");
    tbody6.classList.add("none");
    tbody7.classList.add("none");


    dey1.classList.remove('dey');
    dey2.classList.remove("dey");
    dey3.classList.remove("dey");
    dey4.classList.remove("dey");
    dey5.classList.add("dey");
    dey6.classList.remove("dey");
    dey7.classList.remove("dey");


};
dey6.onclick = function(){

    tbody1.classList.add("none");
    tbody2.classList.add("none");
    tbody3.classList.add("none");
    tbody4.classList.add("none");
    tbody5.classList.add("none");
    tbody6.classList.remove("none");
    tbody7.classList.add("none");


    dey1.classList.remove('dey');
    dey2.classList.remove("dey");
    dey3.classList.remove("dey");
    dey4.classList.remove("dey");
    dey5.classList.remove("dey");
    dey6.classList.add("dey");
    dey7.classList.remove("dey");


};
dey7.onclick = function(){

    tbody1.classList.add("none");
    tbody2.classList.add("none");
    tbody3.classList.add("none");
    tbody4.classList.add("none");
    tbody5.classList.add("none");
    tbody6.classList.add("none");
    tbody7.classList.remove("none");


    dey1.classList.remove('dey');
    dey2.classList.remove("dey");
    dey3.classList.remove("dey");
    dey4.classList.remove("dey");
    dey5.classList.remove("dey");
    dey6.classList.remove("dey");
    dey7.classList.add("dey");


};








// swipe

let swipe = document.querySelector(".swipe");

swipe.onclick = function (){
    swipe.style.display='none';
}







//reload

let reload = document.querySelector(".reload");

window.onload = function (){
    reload.style.display="none";
}