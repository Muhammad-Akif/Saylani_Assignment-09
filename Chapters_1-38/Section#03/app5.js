var arr = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3]

for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if( arr[i] === arr[j])
        {
            arr.splice(0,arr[j])
        }
        else
        {
            continue
        }
    }
}
 

console.log(arr);