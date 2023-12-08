function fruitPurchase(input){
    let strawberryPrice = Number(input[0]);
    let bananaWeight = Number(input[1]);
    let orangeWeight = Number(input[2]);
    let raspberryWeight = Number(input[3]);
    let strawberryWeight = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice - (0.4 * raspberryPrice);
    let bananaPrice = raspberryPrice - (0.8 * raspberryPrice);

    let totalBananaPrice = bananaWeight * bananaPrice;
    let totalRaspberryPrice = raspberryPrice * raspberryWeight;
    let totalOrangePrice = orangePrice * orangeWeight;
    let totalStrawberryPrice = strawberryPrice * strawberryWeight;

    let totalAmountNeeded = totalBananaPrice + totalOrangePrice + totalRaspberryPrice + totalStrawberryPrice;
    console.log(totalAmountNeeded);
}

fruitPurchase(["48", "10", "3.3", "6.5", "1.7"]);