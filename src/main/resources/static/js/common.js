function readData(data){
    alert(data);
};

function readForm(formId, url){

      //var formData = $(formId).serialize().replace(/%/g,'%25');
      //var formData = $("form").serialize();
      var formData1 = $(formId).serialize().replace(/%/g,'%25');
      var formData2 = encodeURIComponent($("form").serialize());
      console.log(formData1);
      console.log(formData2);


      $.ajax({
             url : url,
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : formData1,
             success : function(result){
                 //console.log(result);
                //console.log(this.data);
             },
             error : function(err){
                 console.log(err+"에러발생");
                 console.log(this.data);
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