$(function(){
    $("#save-data").on("click",function(event){
        event.preventDefault();
        let form_data=($("#formid").serializeArray());//form data to the array collecting data from the formdata and making it into array
        console.log(form_data);

        //converting array into an object
        let sendData={};
        form_data.forEach(function(elementobj){
            sendData[elementobj.name]=elementobj.value;
        });
        console.log(sendData);

    //sending data to the server
    $.ajax({
        url:`http://localhost:4444/users`,
        method:"POST",
        data:JSON.stringify(sendData),
        contentType:"application/json",
        dataType:"json",
    }).done((result)=>{
        console.log(result);
    }).fail((error)=>{
        console.log(error);
    });
    });
});