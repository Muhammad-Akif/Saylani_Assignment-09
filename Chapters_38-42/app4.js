
var a = Number(prompt('Enter First Subject no.'))
var b = Number(prompt('Enter Second Subject no.'))
var c = Number(prompt('Enter third Subject no.'))
var total = 300
var result, sum;
function main(average=avg(a,b,c), percentage=pcnt(sum,total)) {
    return result = alert('Average : '+average+' Percentage : '+percentage)
}
function avg(sub1,sub2,sub3) {
    sum=sub1+sub2+sub3
    return sum/3
}
function pcnt(sum,total) {
   return  sum/total*100
}
main()