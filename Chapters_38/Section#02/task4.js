var question1 = "Enter Obtained Marks in Subject 1 !"
var subject1 = prompt(question1)
var question2 = "Enter Obtained Marks in Subject 2 !"
var subject2 = prompt(question2)
var question3 = "Enter Obtained Marks in Subject 3 !"
var subject3 = prompt(question3)
var question4 = "Enter Total Marks"
var totalMarks = prompt(question4)
var marksSum = Number(subject1)+Number(subject2)+Number(subject3)
var percentage = marksSum/totalMarks*100
var grade,remarks
if (marksSum > totalMarks) {
    console.log("Error! Obtained Marks Can't be Greater than Total marks");
    console.log(marksSum+" > "+totalMarks)
}
else{
    if (percentage >=80) {
        grade='A-one',remarks='Excelent'
    }
    else if (percentage >=70) {
        grade='A',remarks='Good'
    }
    else if (percentage >=60) {
        grade='B',remarks='you need to improve'
    }
    else{
        grade='Fail',remarks='Sorry'
    }
    console.log("Marks Sheet\n\nTotal marks : "+totalMarks+"\nMarks obtained : "+marksSum+"\nPercentage : "+percentage+"%"+"\nGrade : "+grade+"\nRemarks : "+remarks)    
}