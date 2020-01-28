/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const button = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');

button.addEventListener('click', () => { //eventlistener activates new game when start button is clicked

    game = new Game();

    game.startGame();


})



keys.forEach(key => { //iterates over keys
    key.addEventListener('click', (e) => { //listens for clicks on targeted keys


        game.handleInteraction(e.target); //callls handleInteration method and passes targeted keys


    })




});

document.addEventListener('keyup', e => {
    if (e.keyCode > 64 && e.keyCode < 91) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].textContent === e.key) {
                game.handleInteraction(keys[i]);
            }
        }
    }


});