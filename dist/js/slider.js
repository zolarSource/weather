const slider = (container) => {
    
    // elements
    const containerElement = document.querySelector(container);
    const slides = containerElement.children;
    const btns = document.querySelectorAll('.slider-arrow');

    let counter = 0; // slides counter

    // function that inits slider
    const initSlider = () => {
        containerElement.classList.add('slider');

        for(slide of slides){
            slide.classList.add('slider-slide');
        }
    
        switchCenterEl(slides, counter);
    };
    
    // function that add listeners for buttons
    const addButtonsListeners = () => {
        for(btn of btns){
            btn.classList.contains('slider-arrow-left') ? btn.addEventListener('click', () => {
                if(counter <= 0) {
                    counter = 2;
                    switchCenterEl(slides, counter);
                    return;
                }
                
                counter -= 1;
                switchCenterEl(slides, counter);
            }) : btn.addEventListener('click', () => {
                if(counter >= 2) {
                    counter = 0;
                    switchCenterEl(slides, counter);
                    return;
                } 
                
                counter += 1;
                switchCenterEl(slides, counter);
            }); 
        }
    }

    // function that switches center element
    const switchCenterEl = () => {
        if(counter == 0) {
            if(document.querySelector('.slide-center') !== null){
                document.querySelector('.slide-center').classList.remove('slide-center');
            }
            
            slides[counter].classList.add('slide-center');
        } else {
            document.querySelector('.slide-center').classList.remove('slide-center');
            slides[counter].classList.add('slide-center');
        }
    }    

    // functions usage
    initSlider();
    switchCenterEl();
    addButtonsListeners();
}

