/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const button = document.getElementById('btn__reset');


button.addEventListener('click', () => { //eventlistener activates new game when start button is clicked

    game = new Game();
    game.startGame();


})


const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => {


        game.handleInteraction(e.target);


    })




});