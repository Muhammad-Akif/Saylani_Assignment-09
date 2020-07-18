var std_name = ['gandogdu','samburtakin','haima','Ertugrul','Halima']
var std_class = ['10','11','12','13','16']
var i,a,iname,iclass;
function info(){
    iname = document.querySelector('#name').value 
    iclass = document.querySelector('#class').value
    std_name.push(iname)
    std_class.push(iclass)
    for(i in std_name){
        document.write('  '+i+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_name[i]+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_class[i]+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <a href="#"><button value=i id="btn" onclick="del()">Delete</button><br></a>')
    } 
}
function del(){
    a = document.getElementById('btn').value
    std_name = std_name.splice(0,1)
    for(i in std_name){
        document.write('  '+i+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_name[i]+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_class[i]+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <button value=i id="btn" onclick="del()"><a href="#">Delete</a></button><br>')
    }
}