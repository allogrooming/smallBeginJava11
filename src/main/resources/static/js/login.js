/*
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});*/

function loginProcess(){
    console.log("login");

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
                 console.log(data);
                 console.log(err+"에러발생");
             }
      });
}