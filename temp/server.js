//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user:  'bloguser',
    password: 'test',
    server: 'localhost\\MSSQL2012_LENOVO',
    database: 'blogdb'
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){  
console.log(query);           
     sql.connect(dbConfig, function (err) {
         if (err) {   
                     console.log("Error while connecting database :- " + err);
                     res.send(err);
                  }
                  else {
                         // create Request object
                         var request = new sql.Request();
                         // query to the database
                         request.query(query, function (err, resx) {
                           if (err) {
                                      console.log("Error while querying database :- " + err);
                                      res.send(err);
                                     }
                                     else {
                                       res.send(resx);
                                            }
                               });
                       }
      });           
}





//GET API
app.get("/api/blogs", function(req , res){
                var query = "select top 100 * from blogtbl order by id desc";
                executeQuery (res, query);
});


app.get("/api/blogs/:id", function(req , res){
                var query = "select * from blogtbl WHERE id= " + req.params.id;
                executeQuery (res, query);
});



//POST API
 app.post("/api/blogs", function(req , res){
                var query = "INSERT INTO blogtbl (heading,blogcontent,tags) VALUES ('" + req.body.heading + "','" + req.body.blogcontent  + "','" + req.body.tags + "')";
                executeQuery (res, query);
});


//PUT API (incomplete / unused)
 app.put("/api/blogs/:id", function(req , res){
                //var query = "UPDATE blogtbl SET Name= " 
               // executeQuery (res, query);
});


// DELETE API ( unused/ incomplete)
 app.delete("/api/blogs/:id", function(req , res){
                var query = "DELETE FROM blogtbl WHERE Id=" + req.params.id;
               // executeQuery (res, query);
});