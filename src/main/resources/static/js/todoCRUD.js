function addTodo(result){
    var resultTodo = JSON.parse(result);

    if(resultTodo.length > 0){
        var table4Todo = document.getElementById("toDoListsTable");

        var i=0;
        for(var obj of resultTodo){
            var values = Object.values(obj);

            var newRaw = table4Todo.insertRow();
            newRaw.id = "td-tr-" + obj.toDoCode;
            var color = newRaw.insertCell(0);
            var content = newRaw.insertCell(1);
            var state = newRaw.insertCell(2);
            var deleteBtn = newRaw.insertCell(3);
            var editBtn = newRaw.insertCell(4);

            color.innerText = "■";
            color.id = values[5];
            deleteBtn.id = values[0];
            color.classList.add("color");
            content.classList.add("content");
            deleteBtn.classList.add("delete");
            state.classList.add("state");
            editBtn.classList.add("edit");
            editBtn.classList.add(i);

            content.innerText = values[2];
            state.innerText = values[4];
            deleteBtn.innerText = "delete";
            editBtn.innerText = "edit";

            var tester = document.getElementById(values[5]);
            var colorTodo = "#" + values[5];
            $(tester).css("color", values[5]);
            i++;
        }
    }
    console.log("엥");
}

function editTodo(sendColor, sendContent, clickedDate, toDoCode){
    console.log("editTodo");
     $.ajax({
             url : "/editToDo",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : {"toDoCode" : toDoCode, "toDoContent" : sendContent, "toDoColor" : sendColor},
             success : function(result){
                readToDo(clickedDate);
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}

function addTodoTable(){
    var lengthT = $("#toDoListsTable > tbody tr").length;
    if(lengthT > 0){
        console.log("delete rows");
        var todoT = document.getElementById("toDoListsTable");
        for(var i=lengthT-1; i>0; i--){
           var test = todoT.deleteRow(i);
        }
    }
}

function getDate4Ajax(idStr){
    if(idStr != ""){
        dateStr = "";
        dateStr += idStr.slice(0, 4);
        dateStr += "-";
        dateStr += idStr.slice(4, 6);
        dateStr += "-";
        dateStr += idStr.slice(-2);
        return dateStr;
    }
}

// Session 값 가져오기
function getSession(){
    var session = $("#session").text();
    console.log("sesssion : ", session);
    // TODO: 테스트용 임시
    if (!session) session = '16';
    return session;
}