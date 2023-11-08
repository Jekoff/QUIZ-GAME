const prompt = require("prompt-sync")();

console.log("Welcome to the computer Hardware Quiz!")

let correct_Answers = 0;


const answer1 = prompt("What is the brain of the computer? ");
const correct_Answer1 = "CPU";

// Use toUpperCase() to ensure that the comparison is not case-sensitive.
if(answer1.toUpperCase() === correct_Answer1.toUpperCase()) {
    console.log("correct!");
    correct_Answers ++;
} else {
    console.log("incorrect!");
}


const answer2 = prompt("What is better: a 3090ti or a 4060? ");
const correct_Answer2 = "3090TI"; // Ensure the 'correct' answer is in the same case as expected for comparison

// Again, use toUpperCase() for both user input and correct answer.
if(answer2.toUpperCase() === correct_Answer2.toUpperCase()) {
    console.log("correct!");
    correct_Answers ++;
} else {
    console.log("incorrect!");
}


const answer3 = prompt("What is the recommended amount of RAM in 2023? ");
const correct_Answer3 = "16GB"; // Ensure the 'correct' answer is in the same case as expected for comparison

// Again, use toUpperCase() for both user input and correct answer.
if(answer3.toUpperCase() === correct_Answer3.toUpperCase()) {
    console.log("correct!");
    correct_Answers ++;
} else {
    console.log("incorrect!");
}
