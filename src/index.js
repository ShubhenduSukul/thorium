const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





// <!-- ASSIGNMENT:- -->
// Write a middleware that logs (console.log) some data everytime any API is hit
// Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
// For this first figure out how to get the route location being requested, how to get current timestamp and how to get the IP.
// NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)

// e.g: you should be logging something like this on each line:
// time , IP, Route should be printed on each line in terminal( every time an api is hit)
// 2010-08-19 14:00:00 , 123.459.898.734 , /createUser
// 2010-08-19 14:00:00 , 123.459.898.734 , /basicAPi
// 2010-08-19 14:00:00 , 123.459.898.734 , /falanaAPI

const info= function(req,res,next){
    console.log("HI I am from the Global middleware")
    next();
}
const assi= function(req,res,next){
    var currdate= new Date();
    var Datetime= currdate.getDate() + " "
     +( currdate.getMonth()+1) + " " +
      currdate.getFullYear() + " "
      currdate.getHours() + " :" 
      currdate.getMinutes() + " :"
      currdate.getSeconds() ;
      
      let ip =req.ip
      let url =req.originalUrl
      console.log(`${Datetime} ${ip} ${url}`)

      next()
}





















mongoose.connect("mongodb+srv://ShubhenduSukul:a2F2biQCNUNmrIpD@cluster0.pbil8.mongodb.net/test?authSource=admin&replicaSet=atlas-13oko1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true
})
.then( () => console.log("Sb sahi hai bro"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 27017, function () {
    console.log('Express app running on port ' + (process.env.PORT || 27017))
});
