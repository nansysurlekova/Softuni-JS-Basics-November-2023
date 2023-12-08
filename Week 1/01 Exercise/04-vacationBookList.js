function vacationBookList(input){
    let pageCount = Number(input[0]);
    let pagesCountPerHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let totalHours = pageCount / pagesCountPerHour;
    let hoursPerDay = totalHours / daysNeeded;

    console.log(hoursPerDay);

}

vacationBookList(["212", "20", "2"]);