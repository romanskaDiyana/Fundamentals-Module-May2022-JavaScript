//03. Merge Arrays
//Write a function, which receives two string arrays and merges them into a third array.  

function merge(firstArray, secondArray) {

    let resultArray = [];
    let arrayLength = firstArray.length;

    for (let i = 0; i < arrayLength; i++) {
        if (i % 2 === 0) {
            resultArray.push(Number(firstArray[i]) + Number(secondArray[i]))
        }
        else{
            resultArray.push(firstArray[i].concat(secondArray[i]))
        }
    }

    console.log(resultArray.join(' - '));
}

merge(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
//output: 
//22 - 1522 - 110 - 5636 - 46