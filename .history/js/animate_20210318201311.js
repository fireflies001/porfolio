var checkIfTrue = false;
var animation;
function isMouseIn(){
    
    if(!checkIfTrue){
        animation = anime({
            targets: '.logo',
            translateX: 500,
            direction: 'alternate',
            easing: 'linear',
            duration: 750
          });
        checkIfTrue = true;
    }
    animation.restart;
    checkIfTrue = false;  
}





