//05. Max Number
//Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 

function maxNumber(array) {
    
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNumber = array[i];

        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber <= array[j]) {
                isBigger = false;
            }
        }
        
        if (isBigger == true) {
            resultArray.push(array[i]);
        }
    }

    console.log(resultArray.join(' '));
}

maxNumber([1, 4, 3, 2]);
//output: 
//4 3 2