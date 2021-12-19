import {workLink, cursorBorder, cursorIcon} from "./variables.js";
export default function imageReveal () {
    if (screen.width < 800) {
        // uit met de buis
    } else {
        // get case items to hover over
        // get empty img tag
        const caseItems = document.querySelectorAll('.myworkitem');
        const image = document.querySelector('.placeholder-img');   
    
        // iterate on all case items with forEach
        caseItems.forEach((element) => {
        // when mouse enters case item, add image to empty img tag
        element.addEventListener('mouseenter', (event) => {
            let imgData = event.target.getAttribute('data-image')
            event.target.style.zIndex = 99
            image.setAttribute('src', imgData)
            image.style.opacity = 1
        })
    
        // set mouse position on mouse move
        element.addEventListener('mousemove', (event) => {
            const x = event.clientX - 185;
            const y = event.clientY - 225;
            image.style.left = x + 'px';
            image.style.top = y + 'px';
        })
    
        // clear everything
        element.addEventListener('mouseleave', (event) => {
            event.target.style.zIndex = 1
            image.setAttribute('src', '')
            image.style.opacity = 0
        })
        });

        // make custom cursor disappear
        workLink.forEach((element) => {
            element.addEventListener("mouseover", function (){
              cursorBorder.style.opacity = "0";
              cursorIcon.style.opacity = "0";
            })
          })
          
          workLink.forEach((element) => {
            element.addEventListener("mouseleave", function (){
              cursorBorder.style.opacity = "1";
              cursorIcon.style.opacity = "1";
            })
          })
    }
};

