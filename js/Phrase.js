/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

    constructor(phrase) {

        this.phrase = phrase.toLowerCase();

    }
    addPhraseToDisplay() {

        const phraseUl = document.querySelector('ul');
        let displayPhrase = this.phrase;
        const regex = /[a-z]/i;
const div = document.getElementById('phrase');

        for (let i = 0; i < displayPhrase.length; i++) {

            if (displayPhrase[i] === regex) {
                let li = document.createElement('li');
                li.classList.add('hide' ,'letter');
                li.innerText(displayPhrase[i]);
                phraseUl.appendChild(li);
                div.appendChild(phraseUl);

            } else if (displayPhrase[i] === ' ') {
                let li = document.createElement('li');
                li.classList.add('space');
                li.innerText(displayPhrase[i]);
                phraseUl.appendChild(li);
                div.appendChild(phraseUl);

            }


        }


    }

};