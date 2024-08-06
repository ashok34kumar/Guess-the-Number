document.addEventListener('DOMContentLoaded',function() {
    const randomNumber = Math.floor(Math.random()*10)+1;
    console.log(randomNumber);
    const guessButton = document.getElementById('guess-button')
    const guessInput = document.getElementById('guess-input')
    const resultdiv = document.getElementById('result')

    guessButton.addEventListener('click',function () {
       const userGuess = parseInt(guessInput.value,10);
       // console.log(userGuess);
       if (isNaN(userGuess)||userGuess < 1 || userGuess > 10) {
        resultdiv.innerHTML = 'Please enter a valid number between 1 and 10.';
        //console.log('Invalid input');
        return;
       }
        if (userGuess === randomNumber) {
            resultdiv.innerHTML = 'congratulation! You guessed the correct number.' ;
            //console.log('Correct guess');
        }else {
            resultdiv.innerHTML ='Sorry, your guess is incorrect. try again';
        }

    })


})






