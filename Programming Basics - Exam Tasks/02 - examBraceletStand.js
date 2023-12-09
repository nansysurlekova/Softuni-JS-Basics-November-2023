function braceletStand(input) {

    let dailyAllowance = Number(input[0]);
    let dailyEarnings = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalSavings = (dailyAllowance * 5) + (dailyEarnings * 5) - expenses;

    if (totalSavings >= giftPrice) {
        console.log(`Profit: ${totalSavings.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let insufficientMoney = giftPrice - totalSavings;
        console.log(`Insufficient money: ${insufficientMoney.toFixed(2)} BGN.`);
    }
}

braceletStand(["5.12", "32.05", "15", "150"]);
