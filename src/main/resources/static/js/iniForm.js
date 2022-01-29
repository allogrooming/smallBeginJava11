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
    let selected, minDate, maxDate, yyyy, mm, dd;
    selected = document.getElementById("startDate").value;

    yyyy = selected.slice(0,4);
    yyyy *= 1;
    yyyy += 1;
    mm = selected.slice(5,7);
    dd = selected.slice(-2);

    maxDate = yyyy + "-" + mm + "-" + dd;

    yyyy -= 1;

    minDate = yyyy + "-" + mm + "-" + dd;

    document.getElementById("endDate").setAttribute("max", maxDate);
    document.getElementById("endDate").setAttribute("min", minDate);
    document.getElementById("endDate").setAttribute("value", maxDate);
}

function everyday(){
    everyWeek();
    document.getElementById("week2").style.display = "none";
    document.getElementById("day-pick").style.display = "none";
}

function everyWeek(){
    // 보이게 하기(코드 정리해야됨
    showElements();

    // 안보이게 할 것
    document.getElementById("week").style.display = "none";
    document.getElementById("or").style.display = "none";
    document.getElementById("date").style.display = "none";
    document.getElementById("form-toggle").style.display = "none";
}

function dayPicker(){
    let i;
    alert("'매일'을 체크해주세요");
    for(i=0; i<7; i++){
        document.getElementsByName("day")[i].checked = false;
    }
}

function showElements(){
    document.getElementById("week2").style.display = "block";
    document.getElementById("day-pick").style.display = "block";
    document.getElementById("week").style.display = "block";
    document.getElementById("or").style.display = "block";
    document.getElementById("date").style.display = "block";
    document.getElementById("form-toggle").style.display = "block";

}

function everyMonth(){
    showElements();

}