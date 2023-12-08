function repainting(input){
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let liquidNeeded = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let extraNylonQty = 2;
    let totalNylonQty = nylonNeeded + extraNylonQty;
    let nylonCost = totalNylonQty * 1.50;

    let extraPaintQty = 0.1 * paintNeeded;
    let totalPaintQty = paintNeeded + extraPaintQty;
    let paintPrice = totalPaintQty * 14.50;

    let thinnerPrice = liquidNeeded * 5;

    let totalMaterialsPrice = nylonCost + paintPrice + thinnerPrice + 0.40;
    let workersPayPerHour = 0.3 * totalMaterialsPrice;

    let totalWorkersPay = workersPayPerHour * hoursNeeded;

    console.log(totalMaterialsPrice + totalWorkersPay);

}

repainting(["10","11","4","8"])