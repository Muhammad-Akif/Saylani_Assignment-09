question = "Enter color of road traffic !"
var color = prompt(question)
if (color.toLowerCase() === "red"){
    console.log("Must Stop")
}
else if (color.toLowerCase() === "yellow") {
    console.log("Ready to move")
}
else{
    console.log("Move now")
}
