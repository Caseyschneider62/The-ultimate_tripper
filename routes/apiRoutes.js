

var path = require('path');
var parser = require('xml2json');
var request = require("request");
var express = require("express");
var router = express.Router()



// ===============================================================================
// ROUTING
// ===============================================================================

// Home
router.get("/", (req, res) => {
    res.send("<h1> This Home Page</h1>");
});
//********************** */
// var search ={};
// //Once the form is submitted
// router.get("/user/:destination", (req, res) => {
//     var destination = req.params.destination;
//     var key = "d9p3q32cju7pyqrctz6h8t8p";
//     var hotqueryURL = "http://api.hotwire.com/v1/deal/hotel?apikey=" + key + "&dest=" + destination + "&distance=5~15&diversity=city";
   

//         request(hotqueryURL, function(error, response, body){
//             var jsonBody = JSON.parse(parser.toJson(body));
//             // console.log("got it");
//             // console.log("Body > ", jsonBody.Hotwire.Result.HotelDeal[0]);
//             //********************** */
//             search.Hotel = jsonBody.Hotwire.Result.HotelDeal[0];
            
//         })

//     var eventqueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=1&apikey=YxwPs1JETjjGeZ5DldVNzdgWDxSziGCo";

//         request(eventqueryURL, function(error, response, body){ 
//             if (error){ throw error;}
//             // console.log("-----------------");
//             // console.log("Body > ", body);
//             //********************** */
//            search.Event = JSON.parse(body)._embedded.events;
//         })
//         //********************** */
//         setInterval(function(){
//             console.log(search);
//             res.json(JSON.parse(search));
//         }, 3000);
      
// });


//======================== Gerardo's Version  ===================================================

                   //============== USING THE HTML FILE ===============

module.exports = function(app){
        app.get("/user/trips", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/create-trip.html"));
    })
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"));
    })

    app.get("/user/:destination", (req, res) => {
        var destination = req.params.destination;
        var key = "d9p3q32cju7pyqrctz6h8t8p";
        var hotqueryURL = "http://api.hotwire.com/v1/deal/hotel?apikey=" + key + "&dest=" + destination + "&distance=5~15&diversity=city";
        

            request(hotqueryURL, function(error, response, body){
                var jsonBody = JSON.parse(parser.toJson(body));
                // console.log("got it");
                // console.log("Body > ", jsonBody.Hotwire.Result.HotelDeal[0]);
                //********************** */
                var hotel = jsonBody.Hotwire.Result.HotelDeal[0]
                res.json(hotel)
            })

                    
        })
};




// //request to the hotel api
// router.get("/user/:destination", (req, res) => {
//     var destination = req.params.destination;
//     var key = "d9p3q32cju7pyqrctz6h8t8p";
//     var hotqueryURL = "http://api.hotwire.com/v1/deal/hotel?apikey=" + key + "&dest=" + destination + "&distance=5~15&diversity=city&format=json";

//     request(hotqueryURL, (error, response, result) => {
//         var hotelObj = JSON.parse(result);
//         console.log(hotelObj.Result[0]);
//         res.json(hotelObj);
//     })
// });

// //request to the events
// router.get("/trip/event", (req, res) => {
//     var eventqueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=3&apikey=YxwPs1JETjjGeZ5DldVNzdgWDxSziGCo";

//     request(eventqueryURL, (err, response, result) => {
//         var eventObj = JSON.parse(result);
//         console.log(eventObj._embedded.events[0]);
//         res.json(eventObj._embedded.events[0]);
//     });
// });
 

// module.exports = router;