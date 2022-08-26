function joinProcess(formId){
    console.log("join");
     $.ajax({
             url : "/joinProcess",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(){
                alert("회원가입완료");
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}