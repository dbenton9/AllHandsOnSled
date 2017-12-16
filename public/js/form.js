$(document).ready(function () {
    //console.log('Hello')
    var fnInput = $("#firstName");
    var lnInput = $("#lastName");
    var emailInput = $("#email");
    var descriptionInput = $("#description");
    var wishInput = $("#wish");
    var amountInput = $("#amount");


    $("#newfamily").on("submit", function handleFormSubmit(event) {
        console.log('form submited')
    
        event.preventDefault(); 

        console.log('after prevent default')
        // Wont submit the post if we are missing a body or a title
        if (!fnInput.val().trim() || !lnInput.val().trim() || !emailInput.val().trim() || !descriptionInput.val().trim() || !amountInput.val().trim()) {
            return;
        }

        var fd = new FormData();

        fd.append('firstName', fnInput.val().trim());
        fd.append('lastName', lnInput.val().trim());
        fd.append('email', emailInput.val().trim());
        fd.append('description', descriptionInput.val().trim());
        fd.append('estAmount', amountInput.val().trim());
        fd.append('picture', $("#familyPicture")[0].files[0]);

        // Constructing a newPost object to hand to the database
        
        $.ajax({
            url: "/api/families",
            method: "POST",
            data: fd,
            processData: false,
            contentType: false,
            dataType: 'json'
        }).done(function(data) {

            console.log('SERVER RESPONSE', data);
            window.location.href = "/all";

        })


    });

});