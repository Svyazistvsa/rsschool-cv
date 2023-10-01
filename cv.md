[rsschool-cv](https://Svyazistvsa.github.io/rsschool-cv/cv)
---

## Sergey Vlasov
***

### Beginner Frontend Developer
***

### Contact information:
* __Phone:__ +79228005978
* __E-mail:__ sviazist.vsa@gmail.com
* __gitHub:__ Svyazistvsa

***

### Briefly About Myself

I'm working on metallurgical plant. My profession is locksmith. I'm wont change my profession and do what I've always dreamed of. That is the main reason why I’ve decided to engage in frontend more seriosly. Until recently, I was engaged exclusively ad a leisure activity.

***

### Skills and Proficiency:
* HTML5 && CSS3
* JavaScript
* Git, GitHub
* VS Code 

***

```
"use strict"

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
    } );

    function quickStart(){
        let cell;        

        for(let x=0; x<variantArr.length; x++){
            if(variantArr[x].checked) cell=variantArr[x].value;
        }
        render(game, cell, "titular");    
    }
```


