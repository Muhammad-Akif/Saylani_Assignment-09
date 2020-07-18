var a=2,b=1;
var result = --a - --b + ++b + b--;
document.write("a is "+a+"<br>b is "+b+"<br>result is "+result);
// --a;                         result => 1 
// --a - --b;                   result => 1
// --a - --b + ++b;             result => 2 
// --a - --b + ++b + b--;       result => 3 
