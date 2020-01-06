/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
constructor(){
this.missed = 0;
this.phrases =  this.createPhrases();

this.activePhrase = null;

}

createPhrases() {

let phraseArray = [
    {
phrase:'The finger thing means the taxes'

    },    {
        phrase:'I think therefore I am'
        
            },    {
                phrase:'I find your lack of faith disturbing'
                
                    },    {
                        phrase:'I knew it was wrong I did it anyway'
                        
                            },    {
                                phrase:'Stupid is a stupid does'
                                
                                    }




];



    return phraseArray;
};

 };