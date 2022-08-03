function readData(data){
    alert(data);
}

function readForm(formId, url){
      $.ajax({
             url : url,
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(result){
                 console.log(result);
                 //console.log(this.data);
             },
             error : function(err){
                 console.log(err+"에러발생");
                 console.log(this.data);
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

};

function readFormTodo(formId, url){

    let dataToDo = $('input[name=toDoList]').val();

    $.ajax({
        url : url,
        type : "post",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : "text",
        data : {toDoList : $('#input-box').val()},
        success : function(result){
            console.log(dataToDo);
        },
        error : function(err){
            console.log(err+"에러발생");
            console.log(dataToDo);
        }
    });

}

function loadCalendar(memberCode){
    $.ajax({
        url : '/loadCalendar',
        type : "post",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : "json",
        data : {
            "memberCode" : memberCode
        },
        success : function(resp){
            showIniAndObList(resp);
            console.log(resp);
        },
        error : function(err, resp){
            console.log(err+"에러발생");
            console.log(resp);
        }
    });
}

/*
function checkId(memberId, url){
    $.ajax({
        url : url,
        type : 'post',
        data:{memberId : memberId},
        success:function(){
            console.log("Success");
            if(cnt != 1){
                $('.id_ok').css("display","inline-block");
                $('.id_already').css("display", "none");
            } else {
                $('.id_already').css("display","inline-block");
                $('.id_ok').css("display", "none");
            }
        },
        error:function(){
            alert("Error");
        }
    });
}*/
