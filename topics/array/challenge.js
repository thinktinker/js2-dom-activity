// #Challenge 1:
//  Given an array of numbers, return an array of each number, squared
const nums = [1, 2, 3, 4, 5]
const squares = nums.map((num) => {return num * num} )
console.log(squares) // --> [1, 4, 9, 16, 25]


// #Challenge 2: 
// Given an array of strings, return an array where the first letter of each string is capitalized
const names = ["stacy", "bart", "charles", "denise"] 
const friends = names.map(function(element){ 
    return element[0].toUpperCase() + element.slice(1) // each element is a string, which can be treated as an array
})
console.log(friends) // --> ["Stacy", "Bart", "Charles", "Denise"] 


// Challenge 3:
// Given an array of strings, return an array of strings that wraps each of the original strings in an HTML-like <p></p> tag.
// Tip: // use back ticks and $ to deliver the template string
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmladded = pokemon.map(character => `<p>${character}</p>`)
console.log(htmladded) // --> ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
