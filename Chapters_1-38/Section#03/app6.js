var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"]
var o = ["th","st","nd","rd"]
for(var i=0;i<(aCities.length-1);i++)
{
    console.log((i+1)+o[i+1]+" choice is "+aCities[i])
}