// function paly() {
//     // step-1 hide the home screen. to hide the screen add the class hidden to home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continueGame() {
    // step -1: generate a random alphabet
    const allpahbet = getRandomAlphabet();
    console.log('your random alpahbet number:', allpahbet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = allpahbet;

    // set the background color
    setBackgroundColorById(allpahbet)

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

