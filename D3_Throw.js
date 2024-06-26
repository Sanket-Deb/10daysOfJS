// Objective

// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task

// Complete the is Positive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// • Ifa is 0, throw an Error with message = Zero Error.

// If a is negative, throw an Error with message = Negative Error.

// Input Formet

// Locked stub code in the editor reads the following input from stdin and passes each value of a to the funken as an argument:

// The first line is an integer, n, denoting the number of times the function will be called with some a.

// Each line i of the a subsequent lines contains an integer denoting some a.

// Constraints

// ・ 1 <= n <= 5

// ・-100≤≤ 100

// Output Format

// If a is 0. throw an Error with message = Zero Error.

// • If a is negative, throw an Error with message = Negative Error.

// If the value of a is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If a is 0, throw an Error with  messqage=Zero Error.
// If a is negative, throw an Error with  message=Negative Error.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
      if (a == 0) {
        throw new Error("Zero Error");
    }
    else if (a < 0) {
        throw new Error("Negative Error");
    }
    else { // a > 0
        return "YES";
    }
    
}