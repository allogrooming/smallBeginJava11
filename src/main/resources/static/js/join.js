function joinProcess(formId){
    console.log("join");

/*    var userId = $('input[name="userId"]').val();
    var password = $('input[name="password"]').val();
    var nickname = $('input[name="nickname"]').val();
    var email = $('input[name="email"]').val();

    console.log(userId)

    var joinData = {"memberId" : userId, "password" : password, "nickname" : nickname, "email" : email};*/

     $.ajax({
             url : "/joinProcess",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(){
                alert("회원가입완료");
                window.location.href = "/calendar1";
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}