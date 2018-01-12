/* Express */
var express = require('express');
var app = express();
var areaUtils = require('./area.js');

app.get("/getArea", function(req, res1) {
    /*let side1 = req.route.query.side1;
    let side2 = req.route.query.side2;
    let area = area.getArea([side1, side2]);*/
    res1.send(JSON.stringify(req.route.query));
    /*if(area != -1){
        res.writeHead(400); // return 400 HTTP status
    } else {
        res.writeHead(200); // return 200 HTTP OK status
    }
    res.end(Json.stringify(area));*/
});

/* Static Declarations */
var port = process.env.PORT || 3000;

//app.listen(process.env.PORT || 80); //for Heroku
app.listen(port, function(){
    console.log("server running at https://localhost:3000/")
});
