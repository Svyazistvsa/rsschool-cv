"use strict"

export function descFunc (event){
    if(event.target.classList.contains("disBut")){
        let but = event.target,
            text = document.querySelector(".disBut ~ div");
        text.classList.toggle("displayOn");
        
    }
}