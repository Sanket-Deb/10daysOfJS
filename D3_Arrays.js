/*
Function Description

Complete the getSecond Largest function in the editor below.

getSecondLargest has the following parameters:

• int nums[n]: an array of integers

Returns

• int: the second largest number in nums

Input Format

The first line contains an integer, n, the size of the nums array. The second line contains n space-separated numbers that describe the elements in nums.

Constraints

• 1 <= n <= 10

• 0<= nums i <= 100 , where nums, is the number at index i.

• The numbers in nums may not be distinct.
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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    ///////////*************MY SOLUTION*************///////////////////////
    let max1=0
    for(const e of nums){
        if(max1<e){
            max1=e;
        }
        
    }
    
    let max2=0
    for (const e of nums){
        if(max2<e && e<max1)
        {
            max2=e;
        }
    }
    return max2
}
//

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}