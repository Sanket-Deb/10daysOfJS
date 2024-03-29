/*
Task

1. Declare a constant variable, PI. and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).

2. Read a number, r, denoting the radius of a circle from stdin.

3. Use PI and r to calculate the area and perimeter of a circle having radius r.

4. Print area as the first line of output and print perimeter as the second line of output.
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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var r = readLine(parseFloat(Input).toFixed(3))
    const PI = Math.PI
    
    ///////////*************MY SOLUTION*************///////////////////////
    // Print the area of the circle:
    let area = PI * r * r;
    console.log(area)
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter)
    //
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}