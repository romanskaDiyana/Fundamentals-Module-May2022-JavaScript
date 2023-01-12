//01. Add and Subtract
//Write a function, which changes the value of odd and even numbers in an array of numbers. 

function array(input) {

    let resultArray = [];
    let inputArraySum = 0;
    let resultArraySum = 0;
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let currentNumber = input[i];

        let oddNumber = currentNumber - i;
        let evenNumber = currentNumber + i;

        if (currentNumber % 2 == 0) {
            resultArray.push(evenNumber
            );
        }
        else {
            resultArray.push(oddNumber);
        }

        inputArraySum += currentNumber;
        resultArraySum += resultArray[i];
    }

    console.log(resultArray);
    console.log(inputArraySum);
    console.log(resultArraySum);
}

array([5, 15, 23, 56, 35]);
//otput: 
//[ 5, 14, 21, 59, 31 ]
//134
//130


