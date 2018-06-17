var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  var myobj = [
    {name: "Elena", address: "Denvar US"},
    {name: "Dinesh", address: "Richardson US"},
    {name: "Sarath", address: "Boston US"},
    {name: "Vinoth", address: "NY US"},
    {name: "Santhosh", address: "Chicago US"},
    {name: "Reach", address: "Denvar US"},
      
  ];

 var upDate = {name: "Vinoth"}
 var newData = {$set:{name: "Vinoth super"}}
 /*
   dbo.collection("customers123").updateOne(upDate, newData, function(err, response){	  
    if (err) throw err;
    console.log(response.result);
  });

  */
  dbo.collection("customers123").find({}).toArray(function(err, response){
  //dbo.createCollection("customers", function(err, response){
    if (err) throw err;
    console.log(response);
  });
 /* dbo.collection("customers123").drop(function(err, response){
  //dbo.createCollection("customers", function(err, response){
    if (err) throw err;
    //console.log(response);
  });
 
  dbo.collection("customers123").find({}).toArray(function(err, response){
  //dbo.createCollection("customers", function(err, response){
    if (err) throw err;
  });
  
 */
     db.close();

  });