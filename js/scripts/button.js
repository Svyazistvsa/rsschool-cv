"use strict"

let nav = document.querySelector(".mmButton"),
    cont = document.querySelector(".cButton");

    




    document.onclick = (e) => {if(e.target ==nav) nav.classList.add("displayOn");}
   
    document.onclick = (e) => {if (e.target != nav) nav.classList.remove("displayOn");}
            
    document.onclick = (e) => {if (e.target != cont) cont.classList.remove("displayOn");}    
