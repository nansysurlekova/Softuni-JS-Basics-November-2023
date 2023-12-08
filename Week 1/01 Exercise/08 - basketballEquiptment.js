function basketballEquiptment(input){
    let subscriptionCost = Number(input[0]);
    let shoesCost = subscriptionCost - (0.4 * subscriptionCost);
    let clothesCost = shoesCost - (0.2 * shoesCost);
    let ballCost = 0.25 * clothesCost;
    let accessoriesCost = 0.2 * ballCost;

    let totalPrice = subscriptionCost + shoesCost + clothesCost + ballCost + accessoriesCost;
    console.log(totalPrice);
}   

basketballEquiptment(["365"]);