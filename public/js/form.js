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
        // Constructing a newPost object to hand to the database
        var newFamilies = {
            firstName: fnInput.val().trim(),
            lastName: lnInput.val().trim(),
            email: emailInput.val().trim(),
            description: descriptionInput.val().trim(),
            estAmount: amountInput.val().trim()
        };

        console.log(newFamilies);

        submitFamilies(newFamilies);


    })

    function submitFamilies(families) {

        $.ajax({
            url: "/api/families",
            method: "POST",
            data: families
        }).done(function() {

            updateFamilies(families);

        })

    }

        //$.post("/api/families", families, function() {
           // window.location.href = "/all";
          //});

    

    function updateFamilies(families) {
        $.ajax({
            method: "PUT",
            url:"/api/families",
            data: families
        }).done(function() {
            window.location.href = "/all";
        });
    }

});