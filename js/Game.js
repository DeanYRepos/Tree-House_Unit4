/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases(); //method passed into phrases property

        this.activePhrase = null;

    }
    /*Method that creates array of phrases */

    createPhrases() {

        let phraseArray = [ //array of phrase objects
            new Phrase('The finger thing means the taxes')

            ,
            new Phrase('I think therefore I am')

            ,
            new Phrase('I find your lack of faith disturbing')

            ,
            new Phrase('I knew it was wrong I did it anyway')

            ,
            new Phrase('Dont forget to bring a towel ')

        ];



        return phraseArray;
    };
    /*Method that randomizes phrases chossen */


    getRandomPhrase() { //generates random number assigns to phrase and returns random phrase

        let randomNumber = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[randomNumber];

    }

    startGame() {
        $('#overlay').fadeOut('1000');
       let overlay = document.getElementById('overlay'); //calls overlay id
      // overlay.style.visibility = 'hidden'; //hides overlay 
        
        this.activePhrase = this.getRandomPhrase(); //sets random phrase to active phrase
        this.activePhrase.addPhraseToDisplay(); //displays active phrase to display
        let banner = document.getElementById('banner');

     
         //  overlay.style.backgroundColor = this.getRandomColor();



    }

    handleInteraction(keyChosen) {
                                             /* handles game interactions, if the text content of the targeted letter returns true when 
                                              checked against the letters in the activePhrase the chosen letter is disabled on the keyboard 
                                              and the '.chosen' class is added to the targeted letter key. The 'keyChosen' is passed through 
                                              the showMatchedLetter method of the active phrase. The checkForWin method is called. If checkForWin === true call
                                              gameOver(true)  else '.wrong' class added to keyChosen, call removeLife()*/

        let keyChosenContent = keyChosen.textContent;


        if (this.activePhrase.checkLetter(keyChosenContent) || this.activePhrase.checkLetter(keyChosen.key)) {

          
            keyChosen.disabled = true;
            keyChosen.classList.add('chosen');

            this.activePhrase.showMatchedLetter(keyChosenContent);
            this.checkForWin();
            if (this.checkForWin()) {

                this.gameOver(true);
            }

        } else if  (!this.activePhrase.checkLetter(keyChosenContent) && !this.activePhrase.checkLetter(keyChosen.key)) {

            keyChosen.disabled = true;
            keyChosen.classList.add('wrong');

            this.removeLife();





        }

console.log(keyChosen);

    }

    checkForWin() {
        /* Method checks number of letters equal to number of shown letters, if numbers are equal returns true
                           else returns false */

        const allLetters = document.querySelectorAll('.letter');
        const numLetters = allLetters.length;
        const shownLetters = document.querySelectorAll('.show');
        const guessLetters = shownLetters.length;


        if (numLetters === guessLetters) {

            return true;

        } else return false;



    }
    removeLife() {
        /* When called iterates over heart image and replaces with lostHeart image, increments missed counter by 1
                           WHen counter equals 5 gameOver method is called with false parameter */

        const scoreBoard = document.querySelectorAll('li img');
        this.missed += 1;


        for (let i = 0; i < this.missed; i++) {

            scoreBoard[i].src = "images/lostHeart.png";
            console.log(this.missed);

        }
        if (this.missed === 5) {

            this.gameOver(false);
        }

    }







    gameOver(gameWin) { //changes overlay to winning or losing overlay
        let overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');

        if (gameWin) { //if game is won (true) 
            overlay.classList.remove('start'); //hides overlay
            overlay.classList.add('win'); // win class is added to overlay
            overlay.classList.remove('lose');
          
           $('#overlay').fadeIn('1000');
            gameOverMessage.textContent = 'Congratulations, You Win!'; //changes text content to winning message
            overlay.style.backgroundColor = this.getRandomColor();

        } else  {


            overlay.classList.remove('start');
            overlay.classList.add('lose');
            $('#overlay').fadeIn('1000');

            gameOverMessage.textContent = 'You Lose! Try again.';
            overlay.style.backgroundColor = this.getRandomColor();
        }
        this.reset();

    }

    reset() {


        let ul = document.querySelector('ul');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);

        }

        let keys = document.querySelectorAll('.key');


        for (let i = 0; i < keys.length; i++) {
            let list = keys[i];
            list.disabled = false;
            list.classList.remove('chosen');
            list.classList.remove('wrong');
            list.classList.add('key');
            overlay.style.backgroundColor = this.getRandomColor();



        }
        const newScoreBoard = document.querySelectorAll('li img');
        for (let j = 0; j < newScoreBoard.length; j++) {

            newScoreBoard[j].src = 'images/liveHeart.png';

        }


    }
     getRandomColor() {         //generates random color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
};