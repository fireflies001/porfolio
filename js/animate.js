var checkIfTrue = false;
var animation;
function isMouseIn(){
    
    if(!checkIfTrue){
        checkIfTrue = true;
        animation = anime({
            targets: '.logo',
            translateX: 500,
            direction: 'alternate',
            easing: 'linear',
            duration: 750
          });
        animation.restart;
        checkIfTrue = false;
    }
      
}





