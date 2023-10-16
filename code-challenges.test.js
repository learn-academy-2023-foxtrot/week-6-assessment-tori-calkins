// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("capArray", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(capArray(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
//good failure: ReferenceError: CapArray is not defined

// b) Create the function that makes the test pass.
// Pseudo code:
// function name: CapArray
// input: array of objects
// output: an array of strings
// process: create a function with a parameter of array, use map method to iterate through all the key:value pairs inside the array, create a variable for name to split the values of names so its easier to find the index of the last name, create a variable for capitalizing the first letter of the first name, seperate the names to have first name in its own array and last name in its own array, then create a variable to uppercase the last name, use slice to add the capitalized first letter to the rest of the first name and same for the last name, then use the concat method to add the first and last names together, the return the string interpulate line. 


const capArray = (array) => {
  return array.map((value) => {
    const name = value.name.split('').indexOf(' ') // Finds the indexOf where the space is in each name. 
    const firstCase = value.name.charAt(0).toUpperCase() //Capitalizes the first letter of the first name
    const seperateName = value.name.split(' ') //Makes the first name be in the 0 index while the last name is in the 1st index. 
    const firstName = seperateName[0] // Holds just the first index so just the first name.
    const lastCase = value.name.charAt(name + 1).toUpperCase() //Capitalizes the first letter of the last name
    const lastName = seperateName[1] // Holds just the last index so just the last name.
    const capFirstName = firstCase + firstName.slice(1) //Concats the capital letter of the first name with everything sliced after the index of 1, including 1. 
    const capLastName = lastCase + lastName.slice(1) //Concats the capital letter of the last name with everything sliced after the index of 1, including 1. 
    const fullName = capFirstName + ' ' + capLastName
    return `${fullName} is ${value.occupation}.`
  })
}
// console.log(capName(hitchhikersCharacters))

//output: PASS  ./code-challenges.test.js
// [
//   'Ford Prefect is a hitchhiker',
//   'Zaphod Beeblebrox is president of the galaxy',
//   'Arthur Dent is a radio employee'
// ]

// There is definitely an easier way to do this, this was just the only way I could get it to work because I didn't have time to refactor.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainArray", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// //Good Failure: ReferenceError: RemainArray is not defined

// // b) Create the function that makes the test pass.

// Pseudo code:
// function name: remainArray
// Input: an array of mixed data
// Output: an array of numbers, only the remainders of the numbers inside the mixed array when divided by 3
// Process: create a function, declare variables for the numbers only and remainders, use the medulo operator to divide by three and get the remainder, use the .filter method and the .map method to do the iterating of the arrays.

const remainArray = (array) => { // created a function called RemainArray that passes array as its parameter
  const onlyNums = array.filter((value) => typeof value === 'number') // created a variable for the numbers only by using the filter method to create an array of only the values that are the datatype of 'number' 
  const remainders = onlyNums.map((value) => value % 3) // take in the array of only the datatypes of 'number's and use the medulo operator to divide and get the remainders of the numbers inside the array
    return remainders // returns the array only the remainders of the numbers
}
// console.log(remainArray(hodgepodge1))
// console.log(remainArray(hodgepodge2))

// output:  PASS  ./code-challenges.test.js
// [ 2, 0, -1, 0 ]
// [ 2, 1, -1 ]


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedArray", () => {
  it("returns the sum of all the numbers cubed.", () => {
      const cubeAndSum1 = [2, 3, 4]
//     // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
//     // Expected output: 1125
    expect(cubedArray(cubeAndSum1)).toEqual(99)
    expect(cubedArray(cubeAndSum2)).toEqual(1125)
  })
})
//Good Failure: ReferenceError: CubedArray is not defined

// // b) Create the function that makes the test pass.

// Pseudo code:
// Function name: CubedArray
// Input: an array of numbers
// Output: a number, the number is the total value of all the cubed sums
// Process: create a function, create an empty array to hold the cubed number, create a variable for the sum to be held, then use a for loop to iterate through the array, create a variable to cube each index by itself, the use the .push method to move the cubed numbers into the empty array, then use the sum variable and reassign it to add up each of the cubed numbers, lastly have it return the summed up number of all the indexes cubed.


const cubedArray = (array) => { //Created a new function that passes the parameter of array
    let newArray = [] //created a new variable to hold an empty array
    let sum = 0 //created a new variable of sum to hold the number (0 is placed to hold the data type number)
    for (let i = 0; i < array.length; i++) { //for loop to iterate through the array
      let cubed = array[i] * array[i] * array[i] //a variable called cubed stores the arrays indexes being cubed one after another
      newArray.push(cubed) //takes the cubed numbers and pushes each number into the empty array
      sum = newArray[0] + newArray[1] + newArray[2] // Adds up each number in the array, now that each number is cubed. 
    }
    return sum //returns the summed up cubed number
}
// console.log(cubedArray(cubeAndSum1))
// console.log(cubedArray(cubeAndSum2))

// Output:  PASS  ./code-challenges.test.js
// 99
// 1125