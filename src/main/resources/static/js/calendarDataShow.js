function removeAllToDoOnCalendar() {
    var tdList = $("#calendar-body tr td");
    for (var i = 0; i < tdList.length; i++){
        if ($(tdList[i]).children().length > 1){
            console.log($(tdList[i]).children(":gt(0)"));
            $(tdList[i]).children(":gt(0)").remove();
        }
    }
}

function checkToDoOnCalendar(tdId, result) {
    console.log('checkToDoInTable');
    var selectorStr = "#" + trId + " .state";
    $(selectorStr).text(result);
}

function addTodoOnCalendar(result){
    // 기존의 Div를 모두 지운다.
    removeAllToDoOnCalendar()

    for (var i = 0; i < result.length; i++){
        //if (i == 10) break;
        var ul = document.createElement('ul');
        var planDate = result[i].planDate;
        var planDateType = new Date(result[i].planDate);
        console.log('==========================================')
        console.log('i :', i);
        console.log('planDate :', result[i]);
        console.log('planDateType :', planDateType);
        var td = document.getElementById(setDateId(planDate));
        ul.id = 'td-ul-' + td.id;
        ul.className = 'to-do-list';
        for (var j = i; j <= result.length; j++){
            console.log('j :', j);
            if (j == result.length) {
                console.log('j == result.length');
                console.log(ul)
                td.appendChild(ul);
                i = j-1;
                break;
            }
            if (planDate == result[j].planDate){
                console.log('if ===============');
                console.log(result[j]);
                console.log(new Date(result[j].planDate));
                var li = document.createElement('li');
                li.id = 'td-li-' + result[j].toDoCode;
                li.textContent = result[j].toDoContent.replaceAll(" ", "").trim();
                ul.appendChild(li);
            } else {
                console.log('else ===============');
                td.appendChild(ul);
                i = j-1;
                break;
            }
        }
    }


}