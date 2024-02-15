// function paly() {
//     // step-1 hide the home screen. to hide the screen add the class hidden to home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}