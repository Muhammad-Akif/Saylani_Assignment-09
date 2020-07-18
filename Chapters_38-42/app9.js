
var salary = Number(prompt('Enter Employee Salary'))
var Working_hours = Number(prompt('Enter working Hours'))
var result;
if(Working_hours>40){
    let hours = Working_hours-40
    result = Working_hours+(hours*12)
    result;
}
else{
    result = salary
}
alert('Employee Salary is '+result)
