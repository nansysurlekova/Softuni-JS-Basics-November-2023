function touristShop(input) {
    let budget = Number(input.shift());
        let productCount = 0;
        let totalCost = 0;
    
        while (true) {
            let productName = input.shift();
    
            if (productName === 'Stop') {
                break;
            }
    
            let productPrice = Number(input.shift());
            productCount++;
    
            if (productCount % 3 === 0) {
                productPrice /= 2;
            }
    
            if (productPrice > budget) {
                console.log("You don't have enough money!");
                console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
                return;
            }
    
            budget -= productPrice;
            totalCost += productPrice;
        }
    
        console.log(`You bought ${productCount} products for ${totalCost.toFixed(2)} leva.`);

}

touristShop(["153.20", 
    "Backpack", 
    "25.20",
    "Shoes", 
    "54",
    "Sunglasses",
    "30",
    "Stop"])


   
    