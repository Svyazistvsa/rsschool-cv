"use strict"    

function enterCode(){
    let divCode = document.querySelector(".code"),
        codeText  = `"use strict"

        import {render} from "./game.js";
        import {playing} from "./audio.js";

        let startButton = document.querySelector(".startButton"),
            form = document.forms.variant, 
            variantCells = form.elements.cells,
            variantArr = Array.from(variantCells);
            
            startButton.addEventListener("pointerdown", () => {
                playing("vzryiv");
                startButton.addEventListener("pointerup", () => {
                    setTimeout(quickStart, 500);
                });
            } );`


    divCode.createNode("P").innerTEXT = `"use strict"

    import {render} from "./game.js";
    import {playing} from "./audio.js";

    let startButton = document.querySelector(".startButton"),
        form = document.forms.variant, 
        variantCells = form.elements.cells,
        variantArr = Array.from(variantCells);
        
        startButton.addEventListener("pointerdown", () => {
            playing("vzryiv");
            startButton.addEventListener("pointerup", () => {
                setTimeout(quickStart, 500);
            });
        } );`
}    

enterCode();
