
var a = Number(prompt('Enter First Side'))
var b = Number(prompt('Enter Second Side'))
var c = Number(prompt('Enter third Side'))
function Area(a,b,c,s) {
    return s*(s-a)*(s-b)*(s-c)    
}
function calculate(a,b,c) {
    return (a+b+c)/2
}
var s = calculate(a,b,c)
console.log(s)
alert('Result '+Area(a,b,c,s))