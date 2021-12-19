import {textItems} from "./variables.js";

export default function textWrapper() {

    textItems.forEach(item => {
        const singleWord = item.textContent
        const singleWordArray = singleWord.split(' ')
        let wrappedArray = []
        singleWordArray.forEach(char => {
            const span = document.createElement('span');
            span.style.overflow = 'hidden';
            span.style.display = 'inline-block';
            wrappedArray.push(`<span class="overflow-hidden"><span class="wrapping-paper">${char}</span></span>`);
        })
        const wrappedSentence = wrappedArray.join(' ')
        item.innerHTML = wrappedSentence
    })
};

