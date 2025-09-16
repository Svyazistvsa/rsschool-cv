"use strict"

export function descFunc (event){
    if(event.target.classList.contains("disBut")){        
        let text = event.target.parentNode.querySelector(".disBut ~ div");
        text.classList.toggle("displayOn");        
    }
}