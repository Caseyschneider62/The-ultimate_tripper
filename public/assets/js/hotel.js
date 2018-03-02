$(document).ready(() => {
    $("#form-submit").on("submit", (event) => { 
        // event.preventDefault();       
        var destination = $('#destination').val().trim();
        var dateStart = $('#date-start').val();
        var dateEnd = $('#date-end').val();
        var budget = $("#budget").val();

        var obj={
         destination,
         
         budget 

        }

        console.log(destination);
        console.log(dateStart);
        console.log(dateEnd);
        console.log(budget);

      

        $.ajax({
            url: "/user/" + destination,
            method: "GET",
            success: function(data) {
                console.log(data);
            }
        });

        $.ajax({
            url: "/api/results",
            method: "POST",
            data: obj,
            success: function(data) {
                console.log("success");
            }
        });


      

        


        //============================= EVENTS API ==================================================
        // var eventqueryURL = "https://cryptic-headland-94862.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?city=" + destination + "&size=3&apikey=YxwPs1JETjjGeZ5DldVNzdgWDxSziGCo";

        // $.ajax({
        //     url: eventqueryURL,
        //     method: "GET"
        // }).done((result) => {
        //     var eventBody = result;
        //     console.dir(eventBody._embedded);
        // })

    });
});