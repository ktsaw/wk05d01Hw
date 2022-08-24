
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//The first question is for the numbers array. The second question is for the words array.

//You don't have to write an answer to the thought questions.

//a. Every 

  //1. Determine if every number is greater than or equal to 0

function checkNum(num) {
    return num >= 0;
}
console.log(nums.every(checkNum))

  //2. determine if every word shorter than 8 characters

function checkWords(word) {
    return word.length < 8
}
console.log(panagram.every(checkWords))

//b. Filter

  //1. filter the array for numbers less than 4

const smallNums = nums.filter(num => {
    return num < 4;
})
console.log(smallNums)

  //2. filter words that have an even length

const evenLengthWords = panagram.filter(word => {
    return word.length % 2 === 0;
})
console.log(evenLengthWords)

//c. Find

  //1. Find the first value divisible by 5
let result = nums.find(num => {
    return num % 5 === 0;
})
console.log(result)
    
  //2. find the first word that is longer than 5 characters

let answer = panagram.find(word => {
    return word.length > 5
})
console.log(answer)

//d. Find Index

  //1. find the index of the first number that is divisible by 3

const findIndexNum = nums.findIndex((num) => {
    return num % 3 === 0;
})
console.log(findIndexNum)

  //2. find the index of the first word that is less than 2 characters long

const findIndexWord = panagram.findIndex((word) => {
    return word.length < 2;
})
console.log(findIndexWord)


//e. For Each

  //1. console.log each value of the nums array multiplied by 3

let times3 = [];
nums.forEach(function(num) {
times3.push(num * 3)
})

console.log(times3)

  //2. console.log each word with an exclamation point at the end of it

let newPanagram = []
panagram.forEach(function(word){
    newPanagram.push(`${word + '!'}`)
})
console.log(newPanagram)

// Thought Questions

// What happened to the original array?
// Can you store the values from a forEach method in a new array?
//  (Links to an external site.)

// Thought Questions

// What happened to the original array?
// Can you store the values from a mapmethod in a new array?
//  (Links to an external site.)

//f. Map
  //1. make a new array of each number multiplied by 100

const times100 = nums.map(num => {
  return num * 100;
})
console.log(times100)

  //2. make a new array of all the words in all uppercase
const upperCasePanagram = panagram.map(word => {
  return word.toUpperCase()
})
console.log(upperCasePanagram)

//Thought Questions

//What happened to the original array?
//Can you store the values from a map method in a new array?
// (Links to an external site.)
//g. Some (need to do)

  //Find out if some numbers are divisible by 7
const divisibleBy7 = nums.some(function(e) {
  return e % 7 === 0;
})
console.log(divisibleBy7)

  //Find out if some words have the letter a in them
const wordContainA = panagram.some(function(e) {
  return e.includes('a')
})
console.log(wordContainA)

// (Links to an external site.)
 //Hungry for More
// (Links to an external site.)
//h. Reduce (this is optional per Devin)

  //Add all the numbers in the array together using the reduce method
let summedNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNums)

  //concatenate all the words using reduce
let concatenatedWords = panagram.reduce(function(previous, current, index, array) {
  return previous + current
})
console.log(concatenatedWords)

//Thought Questions

//What happened to the original array?
// (Links to an external site.)

//i. Sort (this is optional per Devin)

  //Try to sort without any arguments, do you get what you'd expect with the numbers array?
nums.sort();
console.log(nums)

  //Try to sort without any arguments, do you get what you'd expect with the words array?
panagram.sort();
console.log(panagram)

  // Sort the numbers in ascending order
  // Sort the numbers in descending order
  // Sort the words in ascending order
  // Sort the words in descending order
  // Thought Questions

// What happened to the original array?
//  (Links to an external site.)

// Array Methods Challenge Problems  (have to do)
//  (Links to an external site.)

//  isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once

//const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// (Links to an external site.)

function isPanagram(str) {
  return /[a-zA-Z]/.test(str)
}
console.log(isPanagram(panagram))
//console.log(isPanagram('123'))
//console.log(isPanagram(''))

// Working with data
// filter for products with a price that is less than 10
// using the array below:
// sort alphabetically by product name
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]

    //.filter(): filter for products with a price that is less than 10
    const priceLessThan10 = products.filter(product => product.price < 10)
    console.log(priceLessThan10)
    
    //.sort(): sort alphabetically by product name
    products.sort((a, b) => a.name.localeCompare(b.name));
      console.log(products);
    
    