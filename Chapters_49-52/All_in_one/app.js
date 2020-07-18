//#01
// function msg(){
//     var fname = document.querySelector('#fname').value
//     var lname = document.querySelector('#lname').value
//     var password = document.querySelector('#pass').value
//     var email = document.querySelector('#email').value
//     document.write('First Name = '+fname+' Last Name = '+lname+' Email = '+email+' Password = '+password)
// }

//#02
// function more(){
//     var prg = document.querySelector('#pra').innerHTML
//     var fprg = document.createElement('p').innerHTML
//     fprg = document.write('<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur quos repellat hic fugiat alias laborum dolore in a rerum quod reprehenderit debitis minus adipisci itaque doloribus sunt, architecto optio nemo expedita eaque accusantium. Excepturi eligendi nulla sequi quod impedit sunt magnam eveniet enim? Illo at nemo dolorem natus consectetur.</p>')
//     prg = fprg
// }

//#03
var std_name = ['akif','ali','saljan','Ertugrul','Halima']
var std_class = ['10','11','12','13','16']
var flag = false
var i,a,iname,iclass;
function info(){
    iname = document.querySelector('#name').value 
    iclass = document.querySelector('#class').value
    std_name.push(iname)
    std_class.push(iclass)
    for(i in std_name){
        document.write('  '+i+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_name[i]+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_class[i]+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <button value=i id="btn" onclick="del()">Delete</button><br>')
        }
    flag = true 
}
if(flag){
    function render(){
        for(i in std_name){
        document.write('  '+i+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_name[i]+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_class[i]+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <button value=i id="btn" onclick="del()">Delete</button><br>')
        }
        i=0
    }
    render()
    function del(){
        a = document.getElementById('btn').value
        console.log('hi')
    }
}