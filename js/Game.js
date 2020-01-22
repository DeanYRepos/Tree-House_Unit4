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


    getRandomPhrase() {

        let randomNumber = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[randomNumber];

    }

    startGame() {


        let overlay = document.getElementById('overlay'); //calls overlay id
        overlay.style.visibility = 'hidden'; //hides overlay 
        this.activePhrase = this.getRandomPhrase(); //sets random phrase to active phrase
        this.activePhrase.addPhraseToDisplay(); //displays active phrase to display

    }

    handleInteraction(keyChosen) {
        //const letters = document.querySelectorAll('.letter');
//console.log(keyChosen);
       keyChosen.disabled = true;
            if (this.activePhase === keyChosen) {
                 
                
                keyChosen.classList.add('chosen');
              
                this.activePhrase.showMatchedLetter();
                
            } else  (this.activePhrase !== keyChosen) 
                keyChosen.classList.add('wrong');
                
                this.removeLife();

               

            
            this.checkForWin();
            if (this.checkForWin()) {

                this.gameOver();
         }

        


    }
    
    checkForWin() {

        const allLetters = document.querySelectorAll('.letter');
        const numLetters = allLetters.length;
        const shownLetters = document.querySelectorAll('.show');
        const guessLetters = shownLetters.length;


        if (numLetters === guessLetters) {

            return true;

        } else return false;



    }
    removeLife() {

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







    gameOver(gameWin) {
        let overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        if (gameWin) {
            overlay.classList.remove('start');
            overlay.classList.add('win');

            overlay.style.visibility = 'visible';
            gameOverMessage.textContent = 'Congratulations, You Win!';


        } else {


            overlay.classList.remove('start');
            overlay.classList.add('lose');

            overlay.style.visibility = 'visible';
            gameOverMessage.textContent = 'You Lose! Try again.';

        }


    }
};