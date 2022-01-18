function readData(url, elementId, callback) {

     $.ajax({
             url : url,
             type : "POST",
             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
             dataType :"TEXT",
             data : $(elementId).value,
             success : function(result){
                     callback(result);
             },
             error : function(err){
                 console.log("readData error");
             }
     });

};


function readForm(url, formId, callback){

      $.ajax({
             url : url,
             type : "POST",
             contentType: "application/html; charset=UTF-8",
             dataType :"JSON",
             data : $(formId).serialize(),
             success : function(result){
                 callback(result);
             },
             error : function(err){
                 console.log("readForm error");
             }
      });

};

