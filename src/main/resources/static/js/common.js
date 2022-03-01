function readData(data){
    alert(data);
};

function readForm(formId, url){

      $.ajax({
             url : url,
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(result){
                 console.log(result);
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });

}

function leapYear(date){
    let year = new Date(date).getFullYear();
    var result = false;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        result = true;
    }
    return result;
}

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
        text += "<th>" + i + "</th>";
        if(i % 7 == 0){
            console.log(i);
            text += "</tr>";
        }
    }

    text += "</table>";
    return text;
}