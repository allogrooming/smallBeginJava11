function addTodoOnCalendar(result){

    if(result.length > 0){
        console.log('-----------------');
        console.log(result);
    }

    for (var i = 0; i < result.length; i++){
        var $div = document.createElement('div');
        $div.textContent = result[i].toDoContent;
        var planDate = new Date(result[i].planDate);
        var tdId = "#" + setDateId(planDate, planDate.getDate());
        console.log(tdId);
        $(tdId).css("border", "1px solid red");
        $(tdId).append($div);

    }


//        var table4Todo = document.getElementById("toDoListsTable");
//
//        var indexRaw = table4Todo.insertRow();
//        var cell1 = indexRaw.insertCell(0);
//        var cell2 = indexRaw.insertCell(1);
//        var cell3 = indexRaw.insertCell(2);
//        var cell4 = indexRaw.insertCell(3);
//        var cell5 = indexRaw.insertCell(4);
//
//        cell1.innerText = ' ';
//        cell2.innerText = 'content';
//        cell3.innerText = 'state';
//        cell4.innerText = ' ';
//        cell5.innerText = ' ';
//
//        for(var obj of resultTodo){
//            var newRaw = table4Todo.insertRow();
//            var color = newRaw.insertCell(0);
//            var content = newRaw.insertCell(1);
//            var state = newRaw.insertCell(2);
//            var deleteBtn = newRaw.insertCell(3);
//
//            var values = Object.values(obj);
//
//            color.innerText = "●";
//
//            content.innerText = values[2];
//            state.innerText = values[4];
//            deleteBtn.innerText = "delete";


}