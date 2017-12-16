console.log("Here");

$.get("/api/all", function(data) {
    
        for (var i = 0; i < data.length; i++) {
            var wellSection = $("<div>");
    
            wellSection.addClass("well");
    
            wellSection.attr("id", "family-well-" + i);
    
            $("#well-section").append(wellSection);

            $("#family-well-" + i).append("<img src=\"" + data[i].picture + "\">");

            //$("#family-well-" + i).append("<h2>" + "-----------------------------------------------------------------------" + "</h2>");
    
            $("#family-well-" + i).append("<h2>" + data[i].firstName + " " + data[i].lastName + "</h2>");
    
            $("#family-well-" + i).append("<h4>Email: " + data[i].email + "</h4>");
    
            $("#family-well-" + i).append("<h4>Description: " + data[i].description + "</h4>");
    
            $("#family-well-" + i).append("<h4>Estamited Amount: " + data[i].estAmount + "</h4>");

            

            $("#family-well-" + i).append("<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top> <input type='hidden' name='cmd' value='_s-xclick'> <input type='hidden' name='hosted_button_id' value='7ZWTP7888FHQ8'> <input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'> <img alt=' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'> </form> ");

            $("#family-well-" + i).append("<h2>" + "-----------------------------------------------------------------------" + "</h2>");

          //  $("#family-well-" + i).append("<h2>" + "-----------------------------------------------------------------------" + "</h2>");
        
    
        }
    });