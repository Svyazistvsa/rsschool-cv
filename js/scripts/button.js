"use strict"

let nav = document.querySelector(".mmButton"),
    cont = document.querySelector(".cButton");

document.addEventListener("click", tog );    


function tog (event) {
        
    let target = event.target;

    if(target.classList.contains("mmButton")) nav.classList.add("displayOn");
    if(target.classList.contains("cButton")) cont.classList.add("displayOn");
    if(!target.classList.contains("mmButton") && target.classList.contains("cButton")) {
        nav.classList.remove("displayOn");
        cont.classList.remove("displayOn");
    }
    
}