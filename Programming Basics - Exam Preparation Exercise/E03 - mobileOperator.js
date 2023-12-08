function mobileOperator(input) {

    let contractLength = input[0];
    let contractType = input[1];
    let mobileInternetOption = input[2];
    let totalPaymentMonths = Number(input[3]);

    let smallContractPricefor1Year = 9.98;
    let smallContractPricefor2Years = 8.58;
    let mediumContractPricefor1Year = 18.99;
    let mediumContractPricefor2Years = 17.09;
    let largeContractPricefor1Year = 25.98;
    let largeContractPricefor2Years = 23.59;
    let extraContractPricefor1Year = 35.99;
    let extraContractPricefor2Years = 31.79;

    let totalPlanPrice = 0;

    // One year contract
    if (mobileInternetOption === "yes" && contractLength === "one") {
        switch (contractType) {
            case "Small":
                smallContractPricefor1Year += 5.50;
                totalPlanPrice = smallContractPricefor1Year * totalPaymentMonths;
                break;
            case "Middle":
                mediumContractPricefor1Year += 4.35;
                totalPlanPrice = mediumContractPricefor1Year * totalPaymentMonths;
                break;
            case "Large":
                largeContractPricefor1Year += 4.35;
                totalPlanPrice = largeContractPricefor1Year * totalPaymentMonths;
                break;
            case "ExtraLarge":
                extraContractPricefor1Year += 3.85;
                totalPlanPrice = extraContractPricefor1Year * totalPaymentMonths;
                break;
        }
    } else if (mobileInternetOption === "no" && contractLength === "one") {
        switch (contractType) {
            case "Small":
                totalPlanPrice = smallContractPricefor1Year * totalPaymentMonths;
                break;
            case "Middle":
                totalPlanPrice = mediumContractPricefor1Year * totalPaymentMonths;
                break;
            case "Large":
                totalPlanPrice = largeContractPricefor1Year * totalPaymentMonths;
                break;
            case "ExtraLarge":
                totalPlanPrice = extraContractPricefor1Year * totalPaymentMonths;
                break;
        }
    }

    // Two year contract
    if (mobileInternetOption === "yes" && contractLength === "two") {
        switch (contractType) {
            case "Small":
                smallContractPricefor2Years += 5.50;
                totalPlanPrice = smallContractPricefor2Years * totalPaymentMonths;
                break;
            case "Middle":
                mediumContractPricefor2Years += 4.35;
                totalPlanPrice = mediumContractPricefor2Years * totalPaymentMonths;
                break;
            case "Large":
                largeContractPricefor2Years += 4.35;
                totalPlanPrice = largeContractPricefor2Years * totalPaymentMonths;
                break;
            case "ExtraLarge":
                extraContractPricefor2Years += 3.85;
                totalPlanPrice = extraContractPricefor2Years * totalPaymentMonths;
                break;
        }
    } else if (mobileInternetOption === "no" && contractLength === "two") {
        switch (contractType) {
            case "Small":
                totalPlanPrice = smallContractPricefor2Years * totalPaymentMonths;
                totalPlanPrice *= 0.9625; // 3.75% discount for two-year contracts
                break;
            case "Middle":
                totalPlanPrice = mediumContractPricefor2Years * totalPaymentMonths;
                totalPlanPrice *= 0.9625; // 3.75% discount for two-year contracts
                break;
            case "Large":
                totalPlanPrice = largeContractPricefor2Years * totalPaymentMonths;
                totalPlanPrice *= 0.9625; // 3.75% discount for two-year contracts
                break;
            case "ExtraLarge":
                totalPlanPrice = extraContractPricefor2Years * totalPaymentMonths;
                totalPlanPrice *= 0.9625; // 3.75% discount for two-year contracts
                break;
        }
    }

    console.log(totalPlanPrice.toFixed(2) + " lv.");
}

mobileOperator(["two", "Small", "yes", "10"]);
