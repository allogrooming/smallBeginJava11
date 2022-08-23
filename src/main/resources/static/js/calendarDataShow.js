function addTodoOnCalendar(result){

    if(result.length > 0){
        console.log('-----------------');
        console.log(result);
    }

    for (var i = 0; i < result.length; i++){
        var $div = document.createElement('div');
        // DB의 to_do_content 데이터를 trim, 공백삭제
        $div.textContent = result[i].toDoContent.replaceAll(" ", "").trim();
        var planDate = new Date(result[i].planDate);
        var tdId = "#" + setDateId(planDate, planDate.getDate());
        $(tdId).append($div);
    }


}