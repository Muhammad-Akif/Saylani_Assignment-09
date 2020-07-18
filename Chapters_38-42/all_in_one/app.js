//#01
// var num = prompt('Enter Number')
// var pow = prompt('Enter power')
// function power(val,pow){
//     return val**pow
// }
// alert('Result : '+power(num,pow))

//#02
// var year = prompt('Enter Year')
// if(year.slice(-1)==0 || year.slice(-1)==4)
// {
//     alert('Leap Year')
// }
// else{
//     alert('Not Leap Year')
// }

//#03
// var a = Number(prompt('Enter First Side'))
// var b = Number(prompt('Enter Second Side'))
// var c = Number(prompt('Enter third Side'))
// function Area(a,b,c,s) {
//     return s*(s-a)*(s-b)*(s-c)    
// }
// function calculate(a,b,c) {
//     return (a+b+c)/2
// }
// var s = calculate(a,b,c)
// console.log(s)
// alert('Result '+Area(a,b,c,s))

//#04
// var a = Number(prompt('Enter First Subject no.'))
// var b = Number(prompt('Enter Second Subject no.'))
// var c = Number(prompt('Enter third Subject no.'))
// var total = 300
// var result, sum;
// function main(average=avg(a,b,c), percentage=pcnt(sum,total)) {
//     return result = alert('Average : '+average+' Percentage : '+percentage)
// }
// function avg(sub1,sub2,sub3) {
//     sum=sub1+sub2+sub3
//     return sum/3
// }
// function pcnt(sum,total) {
//    return  sum/total*100
// }
// main()

//#05
// var string = prompt('Enter String')
// var char = prompt('Enter character to get index')
// var flag = true
// for(i in string){
//     if(char==string[i])
//     {
//         alert('index of '+char+' is '+i)
//         break;
//         flag = false
//     }     
// }
// if(flag){
//     alert('Not Found')
// }

//#06
// var sentence = prompt('Enter Sentence').toLowerCase()
// var flag = true
// function delete_vowels(sentence) {
//     for(i in sentence) {
//         console.log(sentence[i])
//         if((sentence[i]=='a') || (sentence[i]=='e') || (sentence[i]=='i') || (sentence[i]=='o') || (sentence[i]=='u')){
//             sentence = sentence.replace(sentence[i],'')
//             flag = false
//         }
//     }
//     return sentence;
// }
// var result = delete_vowels(sentence)
// if(flag){
// alert('No vowels => '+sentence)
// }
// else{
//     alert(result)
// }

//#07
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
//     // Loop over every character
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];  
//       // Increase count if both characters are any of the following: aeiou
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
//     return count;
//   }
//   // Check if a character is any of the following: aeiou
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
//   var found = findOccurrences();  
//   console.log(found);

//#08
// var distance = prompt('Enter istance between two cities (in km.)')
// var result_merters,result_feet,result_inches,result_centimeters;
// function meters(distance) {
//     result_merters = distance * 1000
//     return result_merters
// }
// function feet(distance) {
//     result_feet = (distance * 1000)*3
//     return result_feet
// }
// function inches(distance) {
//     result_inches = ((distance * 1000)*3)*12
//     return result_inches
// }
// function centimeters(distance) {
//     result_centimeters = (((distance * 1000)*3)*12)*8
//     return result_centimeters
// }
// var resultInMeters = meters(distance)
// alert(resultInMeters+' m')
// var resultInfeet = feet(distance)
// alert(resultInfeet+' ft')
// var resultIninches = inches(distance)
// alert(resultIninches+' in')
// var resultInCentimeters = centimeters(distance)
// alert(resultInCentimeters+' cent')

//#09
// var salary = Number(prompt('Enter Employee Salary'))
// var Working_hours = Number(prompt('Enter working Hours'))
// var result;
// if(Working_hours>40){
//     let hours = Working_hours-40
//     result = Working_hours+(hours*12)
//     result;
// }
// else{
//     result = salary
// }
// alert('Employee Salary is '+result)

//#10
// let amount = prompt('Enter Amount (less than 1000)')
// console.log("\n\nRequired notes of Rs. 100  :  %d", amount / 100);
// console.log("\n\nRequired notes of Rs. 50   :  %d", (amount % 100) / 50);
// console.log("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
// console.log("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));