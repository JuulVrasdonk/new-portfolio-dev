import {clipboard} from "./variables.js";

export default function clickForClipboard() {
    clipboard.addEventListener("click", () => {
      let p = document.createElement('p');
      function addRemoveMessage() {
        p.classList.add('copy-message-style');
        clipboard.before(p);
        setTimeout(function(){ p.remove() }, 3000);
      }
      navigator.clipboard.writeText('+31682008808')
      .then(() => {
        p.textContent = 'number copied!'; 
        addRemoveMessage()
      })
      .catch(err => {
        p.textContent ='Failed to copy...';
        addRemoveMessage()
      });
    })
};

    

