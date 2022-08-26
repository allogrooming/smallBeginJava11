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

function loginProcess(formId){
    console.log("login");
     $.ajax({
             url : "/loginProcess",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(result){
                if(result == "failed"){
                    alert("Wrong ID or Password");
                }
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}