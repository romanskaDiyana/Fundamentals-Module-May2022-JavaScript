function sumOfOddNumbers(countOfOddNumbers){
    let sumOfNumbers = 0;

    for (let i = 1; i < countOfOddNumbers * 2; i+=2) {
        console.log(i);
        sumOfNumbers+=i;      
    }

    console.log("Sum: " + sumOfNumbers);
}