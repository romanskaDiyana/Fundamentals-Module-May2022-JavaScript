//04. Reverse text 
//Write a program that reverses a text and prints it on the console.

function reverseString(string) {
    let reverse = [string.split("").reverse().join("")];
    return `${reverse}`;
}