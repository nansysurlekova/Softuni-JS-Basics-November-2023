function safariVacation(input){
    let oilPerLiter = 2.10;
    let guidePrice = 100;
    let totalBudget = Number(input[0]);
    let oilLitersNeeded = Number(input[1]);
    let vacationDay = input[2];

    let totalOilPrice = oilLitersNeeded * oilPerLiter;
    let totalPriceBeforeDiscount = totalOilPrice + guidePrice;

    let priceOnSunday = totalPriceBeforeDiscount - (totalPriceBeforeDiscount * 0.2);
    let priceOnSaturday = totalPriceBeforeDiscount - (totalPriceBeforeDiscount * 0.1);

    let moneyLeftForSaturday = totalBudget - priceOnSaturday;
    let moneyNeededForSaturday = priceOnSaturday - totalBudget;

    let moneyLeftForSunday = totalBudget - priceOnSunday;
    let moneyNeededForSunday = priceOnSunday - totalBudget;
    

    if (vacationDay === "Saturday" && priceOnSaturday < totalBudget) {
        console.log("Safari time! Money left: " + moneyLeftForSaturday.toFixed(2) + " lv.");

    } else if (vacationDay === "Saturday" && priceOnSunday > totalBudget){
        console.log("Not enough money! Money needed: " + moneyNeededForSaturday.toFixed(2) + " lv.");
    }

    if (vacationDay === "Sunday" && priceOnSunday < totalBudget) {
        console.log("Safari time! Money left: " + moneyLeftForSunday.toFixed(2) + " lv.");

    } else if (vacationDay === "Sunday" && priceOnSaturday > totalBudget){
        console.log("Not enough money! Money needed: " + moneyNeededForSunday.toFixed(2) + " lv.");
    }

}

safariVacation(["1000","10","Sunday"]);