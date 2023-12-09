function santaStay(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let pricePerNight = 0;

    switch (roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            break;
        case "president apartment":
            pricePerNight = 35.00;
            break;
    }

    let nights = days - 1; 

    let totalCost = nights * pricePerNight;

    if (days > 15) {
        switch (roomType) {
            case "apartment":
                totalCost *= 0.50;
                break;
            case "president apartment":
                totalCost *= 0.80;
                break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (roomType) {
            case "apartment":
                totalCost *= 0.65;
                break;
            case "president apartment":
                totalCost *= 0.85;
                break;
        }
    }

    if (rating === "positive") {

        totalCost += 0.25 * totalCost;
    } else {
        totalCost *= 0.90;
    }

    console.log(`${(totalCost.toFixed(2))}`);
}

santaStay(["14", "apartment", "positive"]);
