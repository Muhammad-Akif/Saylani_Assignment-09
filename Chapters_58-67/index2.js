var p = document.getElementsByTagName("p")
for (i=0;i<p.length;i++){
    document.write(p[i].innerHTML+'<br>')
}


for (i=0;i<p.length;i++){
    if(p[i].className=='render'){
    document.write(p[i].innerHTML+'<br>')
    }
}


var fname = document.getElementById('first-name').value
var lname = document.getElementById('last-name').value
var ename = document.getElementById('email').value
console.log(fname+lname+ename)
fname = "Muhammad"
lname = "Akif"
ename = "akif@gmail"
console.log('First Name = '+fname+' Last Name = '+lname+' Email = '+ename)