var checkIfTrue = false;

function isMouseIn(){
    
    if(!checkIfTrue){
        anime({
            targets: '.logo',
            translateX: 500,
            direction: 'alternate',
            easing: 'linear',
            duration: 750,
            loop: true
          });
        checkIfTrue = true;
    }
    
}





