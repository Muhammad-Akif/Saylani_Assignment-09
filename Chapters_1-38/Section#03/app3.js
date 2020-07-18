var colorNames = []

var colorInBeginning = prompt("what color you wants to add to the beginning: ")
colorNames.unshift(colorInBeginning)
console.log(colorNames)

var colorInEnd = prompt("what color you wants to add to the End: ")
colorNames.push(colorInEnd)
console.log(colorNames)

colorNames.unshift("Black","Yellow")
console.log(colorNames)

colorNames.shift()
console.log(colorNames)

colorNames.pop()
console.log(colorNames)

var Addcolor = prompt("which color you wants to add: ")
var Addindex = parseInt(prompt("At whats index: "))
colorNames.splice(Addindex,0,Addcolor)
console.log(colorNames)

var delindex = parseInt(prompt("At which index you wanted to Delete: "))
var delcolor = parseInt(prompt("How many colors: "))
colorNames.splice(delindex,delcolor)
console.log(colorNames)