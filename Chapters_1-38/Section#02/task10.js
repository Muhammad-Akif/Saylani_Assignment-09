var correctPassword = "abc"
var userPassword = prompt("Enter your Password !")
if (userPassword.length != 0) {
    if (correctPassword === userPassword) {
        console.log("Correct! The password you entered matches the original password")
    }
    else{
        console.log("Wrong Password Try Again")
    }
}
else{
    console.log("Sorry Try Again and Insert any Value")
}
