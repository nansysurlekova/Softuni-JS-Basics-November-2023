function percentageCalculator(input) {
    let n = Number(input.shift());
    let countDivisibleBy2 = 0;
    let countDivisibleBy3 = 0;
    let countDivisibleBy4 = 0;

    for (let i = 0; i < n; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber % 2 === 0) {
            countDivisibleBy2++;
        }

        if (currentNumber % 3 === 0) {
            countDivisibleBy3++;
        }

        if (currentNumber % 4 === 0) {
            countDivisibleBy4++;
        }
    }

    let percentDivisibleBy2 = (countDivisibleBy2 / n) * 100;
    let percentDivisibleBy3 = (countDivisibleBy3 / n) * 100;
    let percentDivisibleBy4 = (countDivisibleBy4 / n) * 100;

    console.log(percentDivisibleBy2.toFixed(2) + "%");
    console.log(percentDivisibleBy3.toFixed(2) + "%");
    console.log(percentDivisibleBy4.toFixed(2) + "%");
}

percentageCalculator(['10', '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);

