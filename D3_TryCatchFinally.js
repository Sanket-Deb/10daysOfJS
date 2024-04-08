/*
Objective

In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

Task

Complete the reverseString function; it has one parameter, s. You must perform the following actions:

1. Try to reverse strings using the split, reverse, and join methods.

2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.

3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

Input Format

Locked stub code in the editor reads variable s from stdin and passes it to the function.

Output Format

You must write two print statements using console.log(): 

1. Print the contents of a caught exception's message on a new line. If no exception was thrown, this line should not be printed.

2. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/

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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    }
    catch(e) {
        console.log(e.message);
    }
    finally {
        console.log(s);
    }
}

