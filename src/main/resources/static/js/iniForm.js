function datePicker(){
    let year, month, date, now, today;

    now = new Date();
    year = now.getFullYear();
    month = now.getMonth() + 1;
    date = now.getDate();

    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }

    today = year + "-" + month + "-" + date;

    document.getElementById("startDate").setAttribute("min", today);
    document.getElementById("startDate").setAttribute("value", today);
}

function duration(){
    let selected, maxDate, yyyy, mm, dd;
    selected = document.getElementById("startDate").value;

    yyyy = selected.slice(0,4);
    yyyy *= 1;
    yyyy += 1;
    mm = selected.slice(5,7);
    dd = selected.slice(-2);

    maxDate = yyyy + "-" + mm + "-" + dd;

    console.log("maxDate");
    console.log(maxDate);

    document.getElementById("endDate").setAttribute("max", maxDate);
    document.getElementById("endDate").setAttribute("value", maxDate);
}