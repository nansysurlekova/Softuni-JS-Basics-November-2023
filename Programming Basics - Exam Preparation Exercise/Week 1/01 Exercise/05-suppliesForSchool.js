function suppliesForSchool(input){
    let pensQty = Number(input[0]);
    let markersQty = Number(input[1]);
    let cleanerQty = Number(input[2]);
    let discountAmount = Number(input[3]);
    let discountAmountDecimal = discountAmount / 100;

    let pensCost = pensQty * 5.80;
    let markersCost = markersQty * 7.20;
    let cleanerCost = cleanerQty * 1.20;
    let totalSum = pensCost + markersCost + cleanerCost;
    
    let totalSumWithDiscount = totalSum - (totalSum * discountAmountDecimal);

    console.log(totalSumWithDiscount);
}

suppliesForSchool(["2", "3", "4","25"]);