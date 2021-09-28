// ASSESSMENT 3: Coding practical questions with Jest

const { odd } = require("prelude-ls");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//The test should expect the array to be the same length as number on input and follow the given sequence. Should be red first then green after

describe('fibonacci', () => {
    
    it('returns an array with the numbers in fibonacci sequence', () => {
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// b) Create the function that makes the test pass.

// make array length be the number of input. I did not need to do this but i originally thought i would. i just set the loop to num.
//number 1 and number 2 must = number 3
//take 3rd number and make it equal to itself minus 2 and minus 1 to get number 3.
//loop thru and make sure to go length of num

function fibonacci(num) {
    let array = [];
    array[0] = 1;
    array[1] = 1;
    for(i = 2; i <num; i++){
        array[i] = array[i - 2] + array[i - 1]
    }
    return array;
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
//test should expect to equal expected output 

describe('oddSorter', () => {
    it('returns an array with the odds sorted from least to greatest', () => {
        expect(oddSorter(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddSorter(fullArr2)).toEqual([-823, 7, 23])
    })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a blank array
//iterate thru the array and take anything out not a number and not odd. 
//Do Math absolute for negative numbers
//use sorting method

function oddSorter(array){
    let final = [];
    for(let i=0; i<array.length; i++){
        if(typeof array[i] == 'number' && array[i] % 2 === 1){
            final.push(array[i])
         } 
         if(array[i] < 0){
             Math.abs(array[i])
             final.push(array[i])
         }
        }
    return final.sort((a, b) => a - b);
}

oddSorter(fullArr1);
oddSorter(fullArr2);



// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
//test should have expected of expected output for each scenario

var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe('cumSum', () => {
    it('returns an array with the accumulated sum', () => {
        expect(cumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(cumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(cumSum(numbersToAdd3)).toEqual([])
        
    })
})

// b) Create the function that makes the test pass.
//blank arrays return blank arrays
//number 1 + number 2 = number i

let cumSum = array => array.map((sum => value => sum += value)(0));    

cumSum(numbersToAdd1)
cumSum(numbersToAdd2)
cumSum(numbersToAdd3)



