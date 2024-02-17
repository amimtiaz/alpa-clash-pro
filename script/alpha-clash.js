// function paly() {
//     // step-1 hide the home screen. to hide the screen add the class hidden to home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }


function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key;
    console.log("Player pressed",playerPressed);

    // stop the game if pressed 'ESC'

    if(playerPressed == 'Escape') {
        gameOver();
    }

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlpabet = currentAlphabet.toLowerCase();
    //console.log(playerPressed,expectedAlpabet);

    // check matched or not
    if(playerPressed === expectedAlpabet) {

        const currentScore = getTextElementValueById('current-score');
        const upadtedScore = currentScore + 1;
        setTextElementValueById('current-score',upadtedScore);


       //------------------------
        // console.log('you get a point');
        // //update score:
        // const currentScoreElement = document.getElementById('current score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScoreText);

       


        //const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        // start new round
        removeBackgroundColorById(expectedAlpabet);
        continueGame();
    } else{

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife == 0) {
            gameOver();
            console.log("game over");
        }
    
        
        

        //---------------------------
        // console.log('you lose a point');
        // // step-1 get the current life number
        // c currentLife = parseInt(currentLifeText);

        // // step-2 reduce the life count
        // const newLife = currentLife - 1;

        // // step-3 display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyBoardButtonPress)

function continueGame() {
    // step -1: generate a random alphabet
    const allpahbet = getRandomAlphabet();
    //console.log('your random alpahbet number:', allpahbet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = allpahbet;

    // set the background color
    setBackgroundColorById(allpahbet)

}

function play(){
    // hide everyting show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    continueGame();
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    //1.get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected text
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}

 
