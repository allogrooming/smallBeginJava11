
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
        text += "<th><div>" + i + "</div></th>";
        if(i % 7 == 0){
            text += "</tr>";
        }
    }

    text += "</table>";
    return text;
}