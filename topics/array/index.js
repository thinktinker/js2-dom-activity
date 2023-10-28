/*
var temp = nums         // pass by reference (memory loc btwn num and temp are the same)
var temp2 = [...nums]   // passing by value (memory loc is different between the two)

const sortedDesc = temp2.sort((a, b) => a > b ? -1 : 1)

console.log("nums: ", nums)
console.log("temp: ", temp)
console.log("temp2: ", temp2)
console.log("sortedDesc: ", sortedDesc)
*/
