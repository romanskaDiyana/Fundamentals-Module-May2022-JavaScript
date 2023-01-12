//06. Equal Sums 
//Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 

function equalSums(array) {
    let foundIndex = 'no';


for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    
    //calculate left sum
    for (let left = 0; left < i; left++) {
        leftSum += array[left];
    }
    //calculate right sum
    for (let right = i + 1; right < array.length ; right++) {
        rightSum += array[right];     
    }
    
    if (leftSum === rightSum) {
        foundIndex = i;
    }
}
      console.log(foundIndex);
}

equalSums([1, 2, 3, 3]);
//output: 
//2
