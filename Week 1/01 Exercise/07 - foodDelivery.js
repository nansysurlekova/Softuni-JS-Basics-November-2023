function foodDelivery(input){
    let chickenMenuQty = Number(input[0]);
    let fishMenuQty = Number(input[1]);
    let vegetarianMenuQty = Number(input[2]);

    let chickenPrice = chickenMenuQty * 10.35;
    let fishPrice = fishMenuQty * 12.40;
    let vegetarianPrice = vegetarianMenuQty * 8.15;
    let deliveryPrice = 2.50;

    let totalMainPrice = chickenPrice + fishPrice + vegetarianPrice;
    let desertPrice = totalMainPrice * 0.2;

    let totalCost = totalMainPrice + desertPrice + deliveryPrice;

    console.log(totalCost);
}

foodDelivery(["2","4","3"]);