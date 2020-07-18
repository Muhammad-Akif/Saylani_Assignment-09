var arr1=[1,5,3,2,6] , arr2=[8,2,3,4,5], arr3=[]

for(var i=0;i<arr1.length;i++)
{
    arr3.push(arr1[i])
    arr3.push(arr2[i])
}
for(var i=0;i<arr3.length;i++)
{
    for(var j=i+1;j<arr3.length;j++)
    {
        if( arr3[i] === arr3[j])
        {
            arr3.splice(0,arr3[j])
        }
        else
        {
            continue
        }
    }
}
console.log(arr3);