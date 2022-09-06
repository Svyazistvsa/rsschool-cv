# Sergey Vlasov
___
## Contacts:
* **E-mail:** Sviazist.vsa@gmail.com
* **Tel:** +79228005978
* **Discorkd:** Svuazist

## About myself
I recently became interested in web design. And I want to<br/>
find out as much as possible about it.

## Skills
* HTML
* css
* JavaScript(basic)

## Code Example
```
"use strict"

let screen = document.querySelector(".screen"),
screenHeight = getComputedStyle(screen).height;

let random = (min, max) => {return Math.floor(Math.random() * (max - min)) + min};

function generate(){
  if(!document.hidden){
    bubbleGen(25,100);
  }
}

function bubbleGen(min, max){
  let bubble = document.createElement("DIV"),
      inBubble = document.createElement("DIV"),
      screenWidth = getComputedStyle(screen).width;


  bubble.append(inBubble);
  inBubble.style.width = inBubble.style.height = "1px";
  bubble.classList.add("bubble");
  bubble.style.width = bubble.style.height = random(min, max) + 'px';
  bubble.style.bottom = 0;
  bubble.style.left = random(10, (parseInt(screenWidth) - 10)) + 'px';

  screen.append(bubble);

  bubbleRemove();

}

function bubbleRemove(){

  let massive = screen.querySelectorAll(".bubble");

  for(let i=0; i < massive.length; i++ ){
    massive[i].onanimationend = () => massive[i].remove();
  }

}

setInterval(generate , 500, 25, 300);

```
## Work experience
Nothing related to it.
## Education
**college:** hydraulics and hydropneumoautomatics
## Language
**English:** badly