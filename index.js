//invoke express and path
var express = require("express");
var path = require("path");

//access express
var app = express();

//access port
var port = process.env.PORT || '5000';

//activate server
app.listen(port, function(){
    console.log(`server is lisnening at htttp://localhost:${port}`)
});

//app configuration
app.use(express.static(path.join(__dirname, "public")))
