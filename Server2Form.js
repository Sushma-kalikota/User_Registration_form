$(function(){
    $.ajax({
        url:`http://localhost:4444/users`,
        method:"GET",
    }).done((result)=>{
        if(result.length!==0){
            //print this to a table
        let rows=result.map(function(user,index){
        return `<tr>
                    <td>${index+1}</td>
                    <td>${user.fullname}</td>
                    <td>${user.useremail}</td>
                    <td>${user.dob}</td>
                    <td>
                    <button data-id="${user.id}"class="btn btn-danger btn-sm remove-record">
                    <i class="fa fa-trash"></i></button>
                    </td>
                </tr>`;
        
    });
    $("#userList").html(rows);
        }
    })
    .fail((error)=>{
        alert('something went wrong,check console');
    }); 
    $(document).on("click",".remove-record",function(){
        let _id=$(this).data("id");//this refers to the html element that triggred the event ,button here and It looks for the data-id attribute in your HTML element and returns its value.
        let isDelete=confirm("are you sure to remove this record?");
        if(isDelete === true){
        $.ajax({
            url:`http://localhost:4444/users/${_id}`,
            method:"DELETE",
        })
        .done(()=>{
            alert("record removed successfully");
            //after removing refreshing the page fofr the new data
            window.location.reload();
        })
        .fail(()=>{
            alert("failerd to remove the record,try again");
        });
    }
    });
    
});