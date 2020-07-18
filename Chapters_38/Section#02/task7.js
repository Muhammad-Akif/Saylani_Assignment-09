var question1 = "Enter First Number !"
var firstNumber = Number(prompt(question1))
var question2 = "Enter Second Number !"
var secondNumber = Number(prompt(question2))
var question3 = "Enter Operation to Apply !"
var operation = prompt(question3)
var result
if (operation === '+') {
    result = (firstNumber+secondNumber)
    console.log("Sum = "+result)
}
else if (operation === '-') {
    result = (firstNumber-secondNumber)
    console.log("Subtraction = "+result)
}
else if (operation === '*') {
    result = (firstNumber*secondNumber)
    console.log("Multiplication = "+result)
}
else if (operation === '/') {
    result = (firstNumber/secondNumber)
    console.log("Division = "+result)
}
else if (operation === '%'){
    result = (firstNumber%secondNumber)
    console.log("Modulus = "+result)
}
else{
    console.log("Invalid Operation")
}
