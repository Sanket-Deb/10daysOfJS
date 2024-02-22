/*
Task

Complete the getGrade (score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam, It must return the letter corresponding to her grade according to the following rules:

If 25 <score<=30, then grade= A .

• If 20 <score<=25, then grade= B .

• If 15 <score<=20 then grade= C .

If 10 <score<=15, then grade= D .

• If 5 <score<=10, then grade= E

• If 0 <= score<=5, then grade= F .
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

function getGrade(score) {
    ///////////*************MY SOLUTION*************///////////////////////
    var s=(parseInt(score));
    let grade;
    // Write your code here
    
    if (s<=30 && s>25){
        grade="A"
    }
    if (s<=25 && s>20){
       grade="B"
    }
    if (s<=20 && s>15){
        grade="C"
    }
    if (s<=15 && s>10){
       grade="D"
    }
    if (s<=10 && s>5){
       grade="E"
    }
    if (s<=5 && s>=0){
       grade="F"
    }
    if(s<0 || s>30){
       console.log("Enter score between 0 to 30")
    }
    
   
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}

