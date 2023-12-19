"use strict"

export function menuClick(event){
    if(event.target.nodeName == "A"){
        this.hidePopover();
    }
}