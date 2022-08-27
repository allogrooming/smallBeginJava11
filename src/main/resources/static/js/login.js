function loginProcess(){
    var userId = $('input[name="userId"]').val();
    var password = $('input[name="password"]').val();
    var loginData = {"memberId" : userId, "password" : password};

     $.ajax({
             url : "/loginProcess",
             type : "post",
             contentType: 'application/json; charset=utf-8',
             dataType : "text",
             data : JSON.stringify(loginData),
             success : function(result){
                if(result == "failed"){
                    alert("Wrong ID or Password");
                }else{
                    window.location.href = "/calendar1";
                }
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}