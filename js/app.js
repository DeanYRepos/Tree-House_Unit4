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
keys.forEach(key => { //iterates over keys
    key.addEventListener('click', (e) => { //listens for clicks on targeted keys


        game.handleInteraction(e.target); //callls handleInteration method and passes targeted keys


    })




});
keys.addEventListener('keyup', (e) =>{




})