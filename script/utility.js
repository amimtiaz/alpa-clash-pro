
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function getRandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    
    const alphabets = alphabetString.split('');
    //console.log(alphabets);


    // get a random allpahbet
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    

    const alpahbet = alphabets[index];
    //console.log(index, alpahbet);
    return alpahbet;

}
