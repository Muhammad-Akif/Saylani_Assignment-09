var val,i;
function delt(val){
    std_name=std_name.splice(val,1)
    std_class=std_class.splice(val,1)
}
var std_name = ['akif','ali','rafeh','kammi','umer','noor','zohaib','hamza','danish','sarmad']
var std_class = ['10','9','8','9','10','10','9','8','10','10']
document.write('Index  Name  Class <br>')
for (i in std_name){
    console.log('write')
    document.write('  '+i+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_name[i]+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   '+std_class[i]+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <button onclick="delt(i)">Delete</button><br>')
}