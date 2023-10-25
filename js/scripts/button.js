"use strict"
      
function togButton (e, classButton, classPlace) { 
  
  let button = document.querySelector(classButton),
      place = document.querySelector(classPlace);
  if(e.target == button){
      place.classList.toggle( "displayOn" );
  }
else if(e.target != button){
      place.classList.remove( "displayOn" );
  }
  preventDefault();
};
export {togButton};