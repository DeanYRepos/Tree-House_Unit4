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
        this.activePhrase = this.getRandomPhrase();  //sets random phrase to active phrase
        this.activePhrase.addPhraseToDisplay();         //displays active phrase to display

    }
    handleInteraction(){



    }
    checkForWin(){

const allLetters =document.querySelectorAll('.letter');
const numLetters = allLetters.length;
const shownLetters = document.querySelectorAll('.show');
const guessLetters = shownLetters.length;


        if(numLetters === guessLetters){

            return true;

        } else return false;
        

    
    }
    removeLife(){
        
       for(let i = 0; i< this.activePhrase.length; i++){
        this.activePhrase[i];
            this.missed += 1;

let heartChange = document.getElementsByClassName('tries');
heartChange.src = "images/lostHeart.png";


if(this.missed === 5){

this.gameOver();
}
        }
        }



        

    }
    gameOver(){
const overlay = document.getElementById('overlay');

// if(){


// }

        
    }
};