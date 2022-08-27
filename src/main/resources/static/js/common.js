function readData(data){
    alert(data);
}

function readForm(formId, url, callback, flag){
      $.ajax({
             url : url,
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(result){
                 if (callback != null && callback != undefined) {
                    if (flag) {
                        callback(result);
                    } else {
                        callback();
                    }
                 }
             },
             error : function(err){
                 console.log(err+"에러발생");
                 console.log(this.data);
             }
      });
}


function readToDoForm(formId, url){
      $.ajax({
             url : url,
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(result){
                 readToDo();
                 readToDoInMonth();
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

function checkToDo(trId, toDoState){
        var toDoCode = trId.slice(-2);
        console.log('toDoCode :', toDoCode);
        console.log('toDoState :', toDoState);

        $.ajax({
            url : '/updateToDoState',
            type : "post",
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType : "text",
            data : {
                "toDoCode" : toDoCode,
                "toDoState" : toDoState
            },
            success : function(result){
                console.log('checkToDo result');
                console.log(result);
                checkToDoInTable(trId, result);
            },
            error : function(err, resp){
                console.log(err+"에러발생");
                console.log(resp);
            }
        });
}

// TODO: memberCode 입력부분 필요
// TODO: dataType => JSON
function readToDo(clickedDate){
    var memberCode = getSession();
    if (!clickedDate) clickedDate = getDate4Ajax($(".active").attr("id"));
    console.log("memberCode : ", memberCode);

     $.ajax({
             url : "/readToDoList",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : {"selectedDate" : clickedDate,
                     "memberCode" : memberCode
             },
             success : function(result){
                 addTodoTable();
                 console.log("result : ", result);
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}

// TODO: memberCode 입력부분 필요
// TODO: dataType => JSON(Done)
function readToDoInMonth(selectedDate){

    if (!selectedDate) selectedDate = getDate4Ajax($(".active").attr("id"));
    var memberCode = getSession();

    console.log('selectedDate :', selectedDate);
    var selectedMonth = selectedDate.slice(0, 7);
    console.log('readToDoInMonth')
    console.log(selectedMonth);

    $.ajax({
        url : "/readToDoInMonth",
        type : "post",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : "JSON",
        data : {"selectedMonth" : selectedMonth,
                "memberCode" : memberCode
        },
        success : function(result){
            console.log(result);
            addTodoOnCalendar(result);
        },
        error : function(err){
            console.log(err+"에러발생");
        }
    });
}

function deleteTodo(deleteid, selectedDate){
      $.ajax({
             url : "/toDoDelete",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : {"toDoCode" : deleteid},
             success : function(result){
                 console.log(result);
                 readToDo(selectedDate);
             },
             error : function(err){
                 console.log(err+"error");
             }
      });
}