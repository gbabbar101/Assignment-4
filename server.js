//set up global variables / modules
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const bodyParser = require("body-parser");


// set the view engine to ejs
app.set('view engine', 'ejs');

//Connection to db
var url = 'mongodb://localhost:27017/dealerdb'
mongoose.connect(url, (err)=>{
    if (err)
        console.log(err)
    else 
        console.log('your database is connected') 
})


var userSchema = new mongoose.Schema({
    seller: String, 
    address: String,     
    city: String,     
    phone: String,      
    email: String,       
    make: String,       
    model: String,       
    year: String   
})


//sets the public folder for general use
app.use(express.static('public'))

//points endpoint "/" to index.html
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'))
});


/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

var User = mongoose.model("userModel", userSchema)
   
app.post("/show", function (req, res) {


    var users = [
        {
            seller: req.body.dealer.seller, 
            address: req.body.dealer.address, 
            city: req.body.dealer.city, 
            phone: req.body.dealer.phone, 
            email: req.body.dealer.email, 
            make: req.body.dealer.make, 
            model: req.body.dealer.model, 
            year: req.body.dealer.year     
        }
    ]

    User.create(users, (err, item)=>{
    if (err)
         console.log('printed on the terminal tested!!')
     else
         console.log(item)
    })

    
    User.find({}, function(err, docs) {
        
        res.render('results',{title: "Assingment4", texto: docs })
    });


    console.log(req.body.dealer.name)
    res.sendFile(path.join(__dirname+'/Search.html'))
});

app.get('/show', function(req, res){     
    User.find({}, function(err, docs) {
        res.render('results',{texto: docs})
    });    
});


//app is listening to server port 3000
const port = 3000
app.listen(port, () => console.log(`app listening on port ${port}!`))

