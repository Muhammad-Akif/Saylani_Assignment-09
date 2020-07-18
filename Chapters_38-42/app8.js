
var distance = prompt('Enter istance between two cities (in km.)')
var result_merters,result_feet,result_inches,result_centimeters;
function meters(distance) {
    result_merters = distance * 1000
    return result_merters
}
function feet(distance) {
    result_feet = (distance * 1000)*3
    return result_feet
}
function inches(distance) {
    result_inches = ((distance * 1000)*3)*12
    return result_inches
}
function centimeters(distance) {
    result_centimeters = (((distance * 1000)*3)*12)*8
    return result_centimeters
}
var resultInMeters = meters(distance)
alert(resultInMeters+' m')
var resultInfeet = feet(distance)
alert(resultInfeet+' ft')
var resultIninches = inches(distance)
alert(resultIninches+' in')
var resultInCentimeters = centimeters(distance)
alert(resultInCentimeters+' cent')
