 a = 4; 
if (++a === 5)                                              //true
{ alert("given condition for variable a is true"); }

var b = 82;
if (b++ === 83)                                             //false
{ alert("given condition for variable b is true"); } 

var c = 12;  
if (c++ === 13){  alert("condition 1 is true"); }           // 2 and 4 true
if (c === 13){  alert("condition 2 is true"); }  
if (++c < 14){  alert("condition 3 is true"); }  
if(c === 14){  alert("condition 4 is true"); }


var materialCost = 20000;  
var laborCost = 2000;                                        //true
var totalCost = materialCost + laborCost;  
if (totalCost === laborCost + materialCost)
{  alert("The cost equals");  } 
 

if (true){  alert("True");  }                                   
if (false){  alert("False");  }                             //true

if("car" < "cat")
{  alert("car is smaller than cat");  }                    //false
 
