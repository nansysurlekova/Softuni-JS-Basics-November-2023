function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentOf = Number(input[3]);

    let totalSizeOfTank = lenght * width * height;
    let totalSizeInLitres = totalSizeOfTank * 0.001;
    let litresNeeded = totalSizeInLitres * (1 - 0.17);

    console.log(litresNeeded);

}

fishTank(["85", "75", "47","17"]);