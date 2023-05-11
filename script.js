const zoomElement = document.querySelector(".foreground");
let zoom = 1.5;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function(e) {  
    if(e.deltaY > 0){
      if (zoom < 2){
        zoomElement.style.transform = `translateZ(-5px) scale(${zoom += ZOOM_SPEED})`;  
      }
    }else{
      if (zoom > 1.5){
      zoomElement.style.transform = `translateZ(-5px) scale(${zoom -= ZOOM_SPEED})`;  }
    }
  });