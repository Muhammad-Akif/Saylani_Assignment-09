var a = 7;  
function sum(){
    var b = 6;
    a = b + b;
    console.log("A inside "+a);
}
sum();
console.log("A = "+a);