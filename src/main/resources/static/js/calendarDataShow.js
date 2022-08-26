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
        var outerDivStr = "<div id='td-div-";
        outerDivStr += result[i].toDoCode + "'>";
        // DB의 to_do_content 데이터를 trim, 공백삭제

        //체크 상자 역할을 하는 innerDiv
        var squareDivStr = "<div class='square' ";
        squareDivStr += "style='background-color:" + result[i].toDoColor + ";'>";
        squareDivStr += "</div>";

        outerDivStr += squareDivStr;

        var contentDivStr = "<div class='content'>";
        contentDivStr += result[i].toDoContent.replaceAll(" ", "").trim();
        contentDivStr += "</div>";

        outerDivStr += contentDivStr;
        outerDivStr += "</div>";

        // console.log(squareDivStr);
        // console.log(contentDivStr);
        // console.log(outerDivStr);
        // $div.innerHTML = innerDivStr;
        // $div.textContent = result[i].toDoContent.replaceAll(" ", "").trim();
        var planDate = new Date(result[i].planDate);
        var tdId = "#" + setDateId(planDate, planDate.getDate());

        // $div.style.backgroundColor = result[i].toDoColor;
        //$(tdId).append($div);
        $(tdId).append(outerDivStr);
    }

}