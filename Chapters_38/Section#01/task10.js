var num; document.write("<br>Value after variable declaration is: " + typeof (num));
num = 5; document.write("<br>initial value: " + num);
document.write("<br>Value after increment is: " + ++num);
document.write("<br>Value after addition is: " + (num + ++num));
var _num = (num + --num); document.write("<br>Value after decrement is: " + --_num);
document.write("<br>The remainder is: " + (_num % 3));