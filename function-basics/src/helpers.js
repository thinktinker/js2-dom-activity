// 1. Create a function
function greeting(){
    console.log("Hello World!")
}

greeting()

// 2. Function with Parameters
function greetingWithName(fName, lName){
    console.log(`Hello ${fName} ${lName}!`);
}

greetingWithName("Mickey", "Mouse")

// 3. Function that returns a value
function multiplier(param1, param2) {
    return param1 * param2
}

console.log(multiplier(8, 8))

// 4. Function that has a default value as a parameter (Good Practice)
function greetingType(greeting = "Hello", user = "user"){
    console.log(greeting + " " + user)
}

greetingType("Good Morning", "Max")

// 5. Destructuring parameters for a Function (Good Practice)
function customerProfile({fName, lName, Membership}){
    console.log("\n")
    console.log("First Name: " + fName)
    console.log("Last Name: " + lName)
    console.log("Membership: " + Membership)
    console.log("\n")
}

const customer = {"fName":"Max", "lName":"Payne", "Membership":"Gold"}
customerProfile(customer)

// 6. Arrow function
const mealPreference = (type) => {
    // operation here
    if(type === "yes")
        console.log("Noted, you have a meal preference")
    else
        console.log("Thank you for your answer")
}

mealPreference("yes")


// 7. Arrow function that returns a value
const reserveSeat = (type) => {
    // operation here
    if(type === "yes")
        return "Processed"
    else
        return "Nil"
}

var result = reserveSeat("no")
console.log("Your reservation is: " + result)


// 8. Spread Operator and code resuability
const showHeros = (heros) => {
    // operation here
    console.log(...heros) 
    
    // comparison
    let storeHeros = new Array()
    heros.forEach(element => {
        storeHeros.push(element)
    });
    console.log(storeHeros)  

}

// An array of marvel characters
var marvelCharacters = ["Spiderman", "Ironman", "Hulk"]
showHeros(marvelCharacters)

// An array of DC characters
var dcCharacters = ["Superman", "Shazam", "Green Lantern"]
showHeros(dcCharacters)

// 9. Anonymous Functions
var sleepFtn = ()=>{
    // a setTimeout takes in a handler to operate
    setTimeout((function (){ console.log("Hello World.")}), 2000);
    setTimeout((()=>{ console.log("Hello World Again.")}), 4000);
}

sleepFtn()


// 9. For Loop vs For Each Loop
function forExamples(){

    var team = ["Beckham", "Roy Keane", "Cantona"]

    team.forEach(player => {
        console.log(player)
    });

    for (let index = 0; index < team.length; index++) {
        console.log(team[index]) 
    }
}

forExamples()