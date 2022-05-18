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
                 console.log(this.data);
             },
             error : function(err){
                 console.log(err+"에러발생");
                 console.log(this.data);
             }
      });
}

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


function ajaxTest(){

      $.ajax({
             url : "ajaxTest", //서버주소
             type : "post",//요청방식
             dataType :"text", //서버가 보내온 데이터 타입(응답 : text, html, xml, json)
             success : function(result){
                 $("#result").text(result);
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });

};