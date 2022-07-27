////////////////////////////////////
// READ THE INSTRUCTIONS BELOW BEFORE STARTING!
////////////////////////////////////
/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * The loops are wrapped in functions for testing purposes. Please do not modify the names of the functions.
 *
 * Test your output in the browser by commenting in and out the function call (aka invocation), e.g., "prompt1()"
 *
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number (including 0 and 10).
 */

// The first one has been done for you as an example!
// function prompt1() {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt1()

// 🌟 MAKE A COMMIT: "Complete prompt 1"

/*
 * Prompt 2:
 *
 * Create a loop that prints every even number BETWEEN 0 and 100 (not including 0 or 100).
 */

// function prompt2() {
//   let i = 2
//   do {
//     console.log(i);
//     i += 2;
//   }
//   while (i <100)
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt2();

// 🌟 MAKE A COMMIT: "Complete prompt 2"

/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number (including -5 and 5).
 */

// function prompt3() {
//   let i = -5;
//   while (i <= 5) {
//     console.log(i);
//     i++;
//   }
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt3()

// 🌟 MAKE A COMMIT: "Complete prompt 3"

/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number (including 10 and 0).
 */

// function prompt4() {
//   for (let i = 10; i >= 0; i--)
//   console.log(i)
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt4()

// 🌟 MAKE A COMMIT: "Complete prompt 4"

/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number (including 5 and -5).
 */
// function prompt5() {
//   for (let i = 5; i >=-5; i--)
//   console.log(i)
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt5()

// 🌟 MAKE A COMMIT: "Complete prompt 5"

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 (inclusive) in multiples of 2 (instead of 1),
 * printing each number.
 */

// function prompt6() {
//   let i = 0;
//   do {
//     console.log(i);
//     i += 2;
//   }
//   while (i<= 50)
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt6()

// 🌟 MAKE A COMMIT: "Complete prompt 6"

/*
 * Prompt 7:
 *
 * For the numbers 0 - 100 (inclusive), print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output IN THE BROWSER:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */
// function prompt7() {
//   let i = 5;
//   do {
//     console.log("I found a " + i + ". High five!");
//     i += 5;
//   }
//   while (i<=100)
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt7()

// 🌟 MAKE A COMMIT: "Complete prompt 7"

/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100 (not inclusive). Hint: Use Math.random so that it generates a new number every time the code is run!
 *
 * Create a conditional that matches these requirements:
 *   - if someNumber is less than 30, print "That's a small number!"
 *   - if someNumber is between 30 and 60, print "The number is medium sized."
 *   - if someNumber is greater than 60, print "We got a big one!"
 */

//  define someNumber here
// var someNumber;
// var someNumber = 35;

// function prompt8() {
// if (someNumber < 30) {
//   console.log("That's a small number!")
// } else if (someNumber > 60) {
//   console.log("We got a big one!")
// } else {
//   console.log("The number is medium sized")
// }
//   // print someNumber to the console in your function so you can see its value
//   console.log(someNumber);
// }

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt8();

// 🌟 MAKE A COMMIT: "Complete prompt 8"

/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e.:
 *  0. Han
 *  1. C3PO
 *  2. R2D2
 */

// const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

// function prompt9() {
//   for (let i = 0; i < starWars.length;i++)
//   console.log(starWars[i]);
// }

// // // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// // prompt9();

// // 🌟 MAKE A COMMIT: "Complete prompt 9"

// /*
//  * Prompt 10:
//  *
//  * Write a loop that pushes every even number between 0 and 100 into an array,
//  * then print the array.
//  */
// function prompt10() {
//   const myArray = [];
//  let myRealArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
//   for (let i = 0; i < myRealArray.length;i++) {
//   console.log(i);
//   i += 1;
// }
//   // don't forget to return the array after pushing the numbers into it so you can see it in the browser!
//   // return the array
//   return myArray;
// }

// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// console.log(prompt10());

// 🌟 MAKE A COMMIT: "Complete prompt 10"

/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number. The median number is the middle number in a SORTED list of numbers. Think through the steps you'll need to take to determine this number with code!
 *
 * Hint: What does Math.floor() do?
 */

// let nums = [
//   14,
//   11,
//   16,
//   15,
//   13,
//   16,
//   15,
//   17,
//   19,
//   11,
//   12,
//   14,
//   19,
//   11,
//   15,
//   17,
//   11,
//   18,
//   12,
//   17,
//   12,
//   71,
//   18,
//   15,
//   12,
// ];

// function prompt11() {
//   nums = nums.sort();
//   i = (nums[11]+nums[12])/2;
//   console.log(i)
// }
// // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt11();

// 🌟 MAKE A COMMIT: "Complete prompt 11"

/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i) in the inner vs. outer loops. You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print `i: ${i} / j: ${j}`
 * You might need to consult Google to see examples of nested for loops!
 */

function prompt12() {
  let i = 0;
  for (let i = 0; i < 11; i++) {
    console.log(i: ${i} / j: ${j});
    for (let j = 11; j < 21; j++);
  }
  console.log(i);
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt12()