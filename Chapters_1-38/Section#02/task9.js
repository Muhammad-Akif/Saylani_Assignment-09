var question = "Enter Charater !"
var char = prompt(question)
if (char[0].toLowerCase() === 'a' || char[0].toLowerCase() === 'e' || char[0].toLowerCase() === 'i' || char[0].toLowerCase() === 'o' || char[0].toLowerCase() === 'u') {
    console.log("It's a Vowel")
}
else{
    console.log("It's a Consonants")
}