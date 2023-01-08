function divisionFunc(numberToDivide) {
    let biggestDivision = 0;
    const divisions = [2, 3, 6, 7, 10]; 

    divisions.forEach(division => {
        if (numberToDivide % division === 0) biggestDivision = division;
    })

    return biggestDivision ? `The number is divisible by ${biggestDivision}` : "Not divisible";
}