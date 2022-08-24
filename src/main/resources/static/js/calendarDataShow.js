function removeAllToDoOnCalendar() {

    var tdList = $("#calendar-body tr td");
    for (var i = 0; i < tdList.length; i++){
        if ($(tdList[i]).children().length > 1){
            //console.log($(tdList[i]).children(":gt(0)"));
            $(tdList[i]).children(":gt(0)").remove();
        }
    }
}

function addTodoOnCalendar(result){
    // 기존의 Div를 모두 지운다.
    removeAllToDoOnCalendar()

    for (var i = 0; i < result.length; i++){
        var $div = document.createElement('div');
        $div.setAttribute('id', 'td-div-' + result[i].toDoCode);
        // DB의 to_do_content 데이터를 trim, 공백삭제
        $div.textContent = result[i].toDoContent.replaceAll(" ", "").trim();
        var planDate = new Date(result[i].planDate);
        var tdId = "#" + setDateId(planDate, planDate.getDate());
        $div.style.backgroundColor = result[i].toDoColor;
        $(tdId).append($div);
    }

}