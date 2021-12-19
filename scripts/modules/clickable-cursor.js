import {link, cursorBorder,  cursorDot} from "./variables.js";

export default function clickableCursor () {
    link.forEach((link) => {
        link.addEventListener("mouseover",() => {
            cursorBorder.classList.add('clickable');
            cursorDot.classList.add('clickabledot');
        });
        link.addEventListener("mouseleave",() => {
            cursorBorder.classList.remove('clickable');
            cursorDot.classList.remove('clickabledot');
        });
    })
}


    
