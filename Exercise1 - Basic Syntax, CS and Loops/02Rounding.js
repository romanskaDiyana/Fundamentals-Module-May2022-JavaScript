function rounding(number, rounding){
    //return parseFloat(number.toFixed(rounding < 15? rounding : 15))

    if (rounding > 15) {
        rounding = 15;
    }

    number = parseFloat(number.toFixed(rounding));
    console.log(number);
}