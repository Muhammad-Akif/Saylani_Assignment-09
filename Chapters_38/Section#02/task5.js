var secretNumber = 5
var Question = "Guess the Secret Number !"
var guessNumber = Number(prompt(Question))
if (guessNumber === secretNumber) {
    console.log("Bingo! Correct answer")
}
else if (guessNumber === ++secretNumber) {
    console.log("Colose enough to the correct answer")    
}
