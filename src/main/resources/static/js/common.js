function readData(data){
    alert(data);
};

function readForm(formId, url){

      $.ajax({
             url : url,
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : $(formId).serialize(),
             success : function(result){
                 console.log(result);
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });

}

function leapYear(date){
    let year = new Date(date).getFullYear();
    var result = false;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        result = true;
    }
    return result;
}
