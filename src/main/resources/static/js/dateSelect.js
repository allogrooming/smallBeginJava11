﻿
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

function showDate(date){

    var date = new Date(date);
    var last = lastDay(date);
    var text = "<table><tr>";
    for (var i = 1; i <= last; i++){
        text += "<th><div class='day'>" + i + "</div></th>";
        if(i % 7 == 0){
            text += "</tr>";
        }
    }
    text += "<div class='day'>말일</div></table>";
    return text;
}


function selectDate(element){
    var dataDateSelected = $(element).attr("data-date-selected");
    if (dataDateSelected == undefined || dataDateSelected == "false"){
        $(element).attr("data-date-selected", "true");
        $(element).css({"background-color" : "#4169E1", "color" : "#FFFAF0"});
    } else if ($(element).attr("data-date-selected") == "true"){
        $(element).css({"background-color" : "transparent", "color" : "black"});
        $(element).attr("data-date-selected", "false");
    }

    var dateListStr = "";
    var dateListArray = [];
    $(".day").each(function(index, item) {
        if($(item).attr("data-date-selected") == "true"){
            dateListArray.push($(item).text())
            dateListStr += $(item).text()
        }
    });

    $(".date-select-list").html(dateListStr);
    return dateListArray;
}

// TODO: duration function 과의 연관관계 확인
function possibleDayCount(startDate, endDate, dateListArray){
     var start = new Date(startDate);
     var end = new Date(endDate);
     var dateListArray = dateListArray;

    console.log(dateListArray);
    var startMonth = start.getMonth();
    var endMonth = end.getMonth();
    var monthBetween = Math.abs(startMonth - endMonth) + 1;
    console.log(monthBetween)

    var count = 0;
    for (let i = 0; i < monthBetween; i++) {
        //console.log("for문안");
        var monthInt = startMonth + i;
        for (j of dateListArray){
            var lastDayInMonth = lastDay(start.setMonth(monthInt));
            //console.log("j : " + j);
            console.log("lastDayInMonth : " + lastDayInMonth)
                if(j == lastDayInMonth){
                    alert(j + "일을 선택하셨습니다. 달의 말일을 선택하고 싶으시다면 '말일' 옵션을 이용해주세요.");
                }
        }
    }

}