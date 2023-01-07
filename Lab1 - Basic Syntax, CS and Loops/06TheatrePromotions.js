function theatrePromotions(typeOfTheDay, age) {
    var pricePerTicket = 0;
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }
    switch (typeOfTheDay) {
        case "Weekday":
            if (age <= 122 && age > 64) {
                pricePerTicket = 12;
            }
            else if (age <= 64 && age > 18) {
                pricePerTicket = 18;
            }
            else if (age <= 18 && age >= 0) {
                pricePerTicket = 12;
            }
            break;
        case "Weekend":
            if (age <= 122 && age > 64) {
                pricePerTicket = 15;
            }
            else if (age <= 64 && age > 18) {
                pricePerTicket = 20;
            }
            else if (age <= 18 && age >= 0) {
                pricePerTicket = 15;
            }
            break;

        case "Holiday":
            if (age <= 122 && age > 64) {
                pricePerTicket = 10;
            }
            else if (age <= 64 && age > 18) {
                pricePerTicket = 12;
            }
            else if (age <= 18 && age >= 0) {
                pricePerTicket = 5;
            }
            break;

        default:
            break;
    }

    console.log(pricePerTicket +"$");
}