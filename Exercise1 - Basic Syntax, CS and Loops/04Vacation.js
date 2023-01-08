function vacation(sizeOfGroup, typeOfGroup, dayOfWeek) {
    const types = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16.00
        },
        "Regular": {
            "Friday": 15.00,
            "Saturday": 20.00,
            "Sunday": 22.50
        },
    };

    function priceInfo(totalPrice) {
        return (`Total price: ${totalPrice.toFixed(2)}`);
    }

    const priceForVacation = types[typeOfGroup][dayOfWeek] * sizeOfGroup;

    if (typeOfGroup === "Students" && sizeOfGroup >= 30) return priceInfo(priceForVacation - priceForVacation * 0.15);
    if (typeOfGroup === "Business" && sizeOfGroup >= 100) return priceInfo(priceForVacation - types[typeOfGroup][dayOfWeek] * 10);
    if (typeOfGroup === "Regular" && sizeOfGroup >= 10 && sizeOfGroup <= 20) return priceInfo(priceForVacation - priceForVacation * 0.05);

    return priceInfo(priceForVacation);
}