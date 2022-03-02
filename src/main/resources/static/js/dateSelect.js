
function lastDay(date){

   var date = new Date(date);
   var month = new Date(date).getMonth();
   var lastDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   var lastDay = lastDayList[month];

   //2월인지 체크
   if (month == 1 && (leapYear(date))){
        lastDay = 29;
   }
   return lastDay;
}

function lastDaySelector(startDate, endDate){
    var start = new Date(startDate);
    var end = new Date(endDate);
    var startMonth = start.getMonth();
    var startTemp = new Date(startDate);
    var lastDayList = [];

    for (let i = 0; i < 12; i++) {
        console.log("startMonth : " + startMonth);
        var total = startMonth + i;
        console.log(typeof total)
        console.log("total before : " + total);
        if(total > 12){
            total = total - 12;
        }
        console.log("total after : " + total);
        var lastDayInMonth = lastDay(startTemp.setMonth(total));
        console.log("startTemp : " + startTemp.toString());
        console.log("end.toString() : " + end.toString());
        console.log("startTemp.getFullYear(): " + startTemp.getFullYear());
        console.log("end.getFullYear() : " +  end.getFullYear());
        console.log("startTemp.getMonth(): " + startTemp.getMonth());
        console.log("end.getMonth() : " +  end.getMonth());
        console.log(startTemp.getFullYear() == end.getFullYear());
        console.log(startTemp.getMonth() == end.getMonth());
        if (startTemp.getFullYear() == end.getFullYear() && startTemp.getMonth() == end.getMonth()){
            console.log("BREAK!!!");
            break;
        }
        lastDayList.push(lastDayInMonth);
    }

    if (end.getDate() != lastDay(end)){
        lastDayList.pop();
    }
    console.log("lastDayList: " + lastDayList)
    return lastDayList;
}

function minLastDay(startDate, endDate) {
    var lastDayList = lastDaySelector(startDate, endDate);
    var minDate = lastDay(startDate);
    console.log(lastDayList);
    if (lastDayList.length){
        for (i of lastDayList) {
            //console.log("i : " + i);
            minDate = Math.min(minDate, i)
            //console.log("minDate : " + minDate)
        }
    }
    return minDate;
}

function showDate(startDate, endDate){
    var lastDayList = lastDaySelector(startDate, endDate);
    var last = minLastDay(startDate, endDate);
    //console.log("last : " + last);
    //console.log("lastDayList : " + lastDayList);

    var text = "<table><tr>";
    for (var i = 1; i <= last; i++){
        if(i == last){
            text += "<th><div class='day end'>" + i + "</div></th>";
            break;
        }
        text += "<th><div class='day'>" + i + "</div></th>";
        if(i % 7 == 0){
            text += "</tr><tr>";
        }
    }
    text += "<th colspan='2'><div class='day' id='everyEnd'>말일</div><th></tr></table>";
    return text;
}

// TODO  날짜 클릭과 실행 가능 횟수 나열
// TODO alert창 customize 논의
// TODO element 정리
function selectDate(element){
    var dataDateSelected = $(element).attr("data-date-selected");
    if (dataDateSelected == undefined || dataDateSelected == "false"){
        $(element).attr("data-date-selected", "true");
        $(element).css({"background-color" : "#4169E1", "color" : "#FFFAF0"});
        if($(element).hasClass("day end")){
            alert($(element).text() + "일을 선택하셨습니다. 매달 말일을 선택하고 싶으시다면 '말일' 옵션을 사용해주세요.");
        }
    } else if ($(element).attr("data-date-selected") == "true"){
        $(element).css({"background-color" : "transparent", "color" : "black"});
        $(element).attr("data-date-selected", "false");
    }

    var dateListArray = [];
    $(".day").each(function(index, item) {
        if($(item).attr("data-date-selected") == "true"){
            dateListArray.push($(item).text())
        }
    });

    return dateListArray;
}


function possibleDayCount(startDate, endDate, dateListArray){
     var start = new Date(startDate);
     var end = new Date(endDate);
     var dateListArray = dateListArray;

    console.log(dateListArray);
    var startMonth = start.getMonth();
    var endMonth = end.getMonth();
    var monthBetween = Math.abs(startMonth - endMonth) + 1;
/*

    var count = 0;
    for (let i = 0; i < monthBetween; i++) {
        var monthInt = startMonth + i;
        for (j of dateListArray){
            var lastDayInMonth = lastDay(start.setMonth(monthInt));
            console.log("lastDayInMonth : " + lastDayInMonth)
                if(j == lastDayInMonth){

                }
        }
    }
*/

}