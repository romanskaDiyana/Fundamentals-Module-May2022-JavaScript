//04. Array Rotation
//Write a function that receives an array and the number of rotations you have to perform. 

function rotation(arrayToRotate, rotations) {
 
    for (let i = 0; i < rotations; i++) {
        let numberToRotate = arrayToRotate.shift();
        arrayToRotate.push(numberToRotate);
    }

    console.log(arrayToRotate.join(' '));

}

rotation([51, 47, 32, 61, 21], 2);
//output: 
//32 61 21 51 47