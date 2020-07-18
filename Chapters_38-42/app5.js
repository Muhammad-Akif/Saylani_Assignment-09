
var string = prompt('Enter String')
var char = prompt('Enter character to get index')
var flag = true
for(i in string){
    if(char==string[i])
    {
        alert('index of '+char+' is '+i)
        break;
        flag = false
    }     
}
if(flag){
    alert('Not Found')
}