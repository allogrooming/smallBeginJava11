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
             console.log("readForm success");
         },
         error : function(err){
             console.log("readForm error");
         }
    });

}

function sendDateList(startDate, endDate, dateList, url){

    $.ajax({
         url : url,
         type : "post",
         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
         dataType : "text",
         data : {
                "dateList" : dateList
                },
         success : function(result){
             console.log("sendDateList success");
         },
         error : function(err){
             console.log("sendDateList error");
         }
    });

}