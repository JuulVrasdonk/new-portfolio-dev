import {cursor} from "./variables.js";
export default function customCursor() {
    gsap.set(cursor, {
        xPercent: -10,
        yPercent: -33
      });
      
      document.body.addEventListener("mousemove", function(e) {
          cursor.style.left = e.clientX + "px",
          cursor.style.top = e.clientY + "px";
      });
      
      window.addEventListener('scroll', function() {
        document.querySelector(".cursor").classList.add('invisible');
      }) 
      
      document.addEventListener('mousemove', function() {
        document.querySelector(".cursor").classList.remove('invisible');
      })
};
