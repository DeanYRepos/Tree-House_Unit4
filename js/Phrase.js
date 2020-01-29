/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        /** method iterates over targeted phrase characters
        checks if character matches regex parameters
        if match, hidden letter added to display else if space matches regex,
         a space is added to display  */
        const phraseUl = document.querySelector('ul');
        let displayPhrase = this.phrase;
        const regex = /[a-z]/i;
        for (let i = 0; i < displayPhrase.length; i++) {
            if (displayPhrase[i].match(regex)) {
                let li = document.createElement('li');
                li.classList.add('hide', 'letter', `${displayPhrase[i]}`);
                li.innerText = displayPhrase[i];
                phraseUl.appendChild(li);
            } else if (displayPhrase[i].match(' ')) {
                let li = document.createElement('li');
                li.classList.add('space');
                li.innerText = displayPhrase[i];
                phraseUl.appendChild(li);
            }
        }
    }
    checkLetter(letter) { //checks if letter is included in selected phrase
        return this.phrase.includes(letter); //returns true if letter is included in phrase, false if not included
    }
    showMatchedLetter(letter) {
        /**  Method shows matched letter to display
         iterates over all letters, if innerHTML matchs letter passed to method
         show class added to lettr. letterMAtch returned */
        let letterMatch = document.querySelectorAll('.letter');
        for (let i = 0; i < letterMatch.length; i++) {
            if (letterMatch[i].innerHTML === letter) {
                letterMatch[i].classList.remove('hide', 'letter', '`${letterMatch[i]}`');
                letterMatch[i].classList.add('show', 'letter', '`${letterMatch[i]}`');
            }
        }
        return letterMatch;
    }
};