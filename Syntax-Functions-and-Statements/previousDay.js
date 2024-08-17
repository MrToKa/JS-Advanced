function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let previousDay = new Date(date);
    previousDay.setDate(date.getDate() - 1);

    return `${previousDay.getFullYear()}-${previousDay.getMonth() + 1}-${previousDay.getDate()}`;
}

console.log(previousDay(2016, 9, 30)); // 2016-9-29
