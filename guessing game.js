// guessing game - list of what we are gong to do.
// generate a random number
// give the user the abbility to guess
// if they guess and they are wrong , aske them again (hint)
// if they win - say they won.

// function
function guessGame(){
    let randomNR = Math.floor(Math.random()*11)
    let guess;

    do{
        guess = prompt("guess a number between 1-10");
        console.log(guess, randomNR);
        if (randomNR > guess){
            console.log('ou guessed too low');
        } else if(randomNR < guess){
            console.log('You guessed too high');
        }
    } while (guess != randomNR);
    console.log("you won!");
   
}
guessGame();