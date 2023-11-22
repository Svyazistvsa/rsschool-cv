"use strict"

function showDescription(e){
  let i = 0;
  for(let name of e.target.classList){
   if(i == 1){
     let div = document.body.createElemen('div');
     div.classList.add('desc');
     
     }
   }
  }
}

let descriptions = {
  one: "This game is written on the phone without the use of package collectors, while working as a locksmith. And it requires optimization, which I will do later.", 
};

export { showDescription, descriptions};