import {aboutMeLink} from "./variables.js";

export default function cursorText() {
    aboutMeLink.addEventListener("mouseover", function (){
        document.querySelector(".cursor-text").textContent = "- Click to get to know me!";
        document.querySelector(".cursor-text").classList.add('text-fade-in')
      });
      
      function removeText() {
        document.querySelector(".cursor-text").textContent = " ";
        document.querySelector(".cursor-text").classList.remove('text-fade-in')
      }
      
      aboutMeLink.addEventListener("mouseleave", removeText);
}
