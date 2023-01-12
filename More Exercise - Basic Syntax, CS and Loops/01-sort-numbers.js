//01. Sort Numbers
//Receive three numbers and you have to sort them in descending order. 
//Print each number on a new line.

function sortNumbers(a, b, c) {
    //console.log(c, b, a);

    const numbers = [a, b, c];
    numbers.sort().reverse();

    numbers.forEach(element => {
        console.log(element);
    });
}