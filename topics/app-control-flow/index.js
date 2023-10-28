// 1. if-else condition
const prompt = require('prompt-sync')();

var answer = prompt("What is your dietary preference (None, Vegetarian, Vegan)? ") 
answer = answer.toLowerCase() // MEAT or Meat or meat

if (answer == "none") {
  console.log(`We noted your preference.`) 
}else if (answer == "vegetarian") {
  console.log(`We noted your meal preference is ${answer}.`)
}else if (answer == "vegan"){
  console.log(`We noted your meal preference is ${answer}.`)
}
else{
  console.log(`Sorry, we did not get a correct response.`) 
}

/*
// 2. Switch
const prompt2 = require('prompt-sync')({sigint: true})

var answer = prompt2("What is your dietary preference (1. None, 2. Vegetarian, 3.Vegan)? Enter a number: ") 

switch (Number(answer)) { // typecast the value to a Number
  case 1:
    console.log("We noted your preference.")
    break;
  case 2:
    console.log("You diet preference is vegetarian.")
    break;  
  case 3:
    console.log("You diet preference is vegan.")
    break;
  default:
    console.log("Your input is not valid.")
    break;
}
*/

/*
// 3. AND Logical Operations
console.log("Swim Safer Verification.")
console.log("========================")

// Check for 400 metre swim
const promptA = require('prompt-sync')({sigint: true})
var answerA = promptA("Have you completed 400 metres in swimming length (y/n): ") 
answerA = answerA.toLocaleLowerCase()

// Check for 8 metre under-water swim
const promptB = require('prompt-sync')({sigint: true})
var answerB = promptB("Have you completed the 8 metre under-water swim (y/n): ") 
answerB = answerB.toLocaleLowerCase()

// Check for completion of theory test
const promptC = require('prompt-sync')({sigint: true})
var answerC = promptC("Have you passed the theory test (y/n): ") 
answerC = answerC.toLocaleLowerCase()

// Provide feedback
if( answerA == "y" && answerB == "y" && answerC == "y"){
  console.log("Congratulations, you have passed the Swim Safer Test!!!")
}else{
  console.log("Sorry, you need to meet all criteria to pass.")
}
*/

/*
// 4. OR Logical Operations
console.log("Theme Park Ticket Purchase.")
console.log("===========================")

// Check for the age of the person making the ticket purchase
// User must be more than or equal to 8 years-old and less than or equal 12 years-old
const promptAge = require('prompt-sync')({sigint: true})
var answerAge = promptAge("What is your age: ") 
answerAge = Number(answerAge)

// Check if use is accompanied by an adult
const promptParent = require('prompt-sync')({sigint: true})
var answerParent = promptParent("Are you accompanied by an adult (y/n): ") 
answerParent = answerParent.toLocaleLowerCase()

var minAge = 8
var maxAge = 12

if( (answerAge >= minAge && answerAge <= maxAge) || answerParent == 'y'){
  console.log("You may continue with the purchase.")
}else{
  console.log("Sorry, you can't make a ticket purchase.")
}
*/

/*
// 5.  Logical NOT Operations
console.log("Alumni Status.")
console.log("===========================")

// Check whether user is an alumni
const prompt = require('prompt-sync')({sigint: true})
var answerAlumni = prompt("Are you an alumni (y/n): ") 
answerAlumni = answerAlumni.toLowerCase()

var status = answerAlumni == 'y' ? true : false //tenary operation

if (!status) {
  console.log("You are not eligible for additional discounts.")
} else {
  console.log("Thank you, you can enjoy at 10% dicount.")
}
*/
