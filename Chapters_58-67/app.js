// var p = document.getElementsByTagName("p")
// for (i=0;i<p.length;i++){
//     document.write(p[i].innerHTML+'<br>')
// }


// for (i=0;i<p.length;i++){
//     if(p[i].className=='render'){
//     document.write(p[i].innerHTML+'<br>')
//     }
// }


// var fname = document.getElementById('first-name').value
// var lname = document.getElementById('last-name').value
// var ename = document.getElementById('email').value
// console.log(fname+lname+ename)
// fname = "Muhammad"
// lname = "Akif"
// ename = "akif@gmail"
// console.log('First Name = '+fname+' Last Name = '+lname+' Email = '+ename)


var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3]
console.log(frm.nodeType)

var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3]
console.log(frm.nodeType)
var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3].childNodes[0]
console.log(frm.nodeType)

var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3]
frm.innerHTML = 'Last Name : Akif'
console.log(frm.innerHTML)

var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]
console.log(frm.firstChild)
console.log(frm.lastChild)

var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3]
console.log(frm.nextSibling)
console.log(frm.previousSibling)

var frm = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[2]
console.log(frm.parentNode)
console.log(frm.nodeType)



