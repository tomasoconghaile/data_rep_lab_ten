const express = require('express')
const app = express()
const port = 4000
//include Cors
const cors = require('cors');
//include body parser
const bodyParser = require("body-parser");
//include mongo
const mongoose = require('mongoose');
//include path
const path = require('path');


//using cors package everytime 
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//set up configuration (lines for configuration)
//where to find build folder
app.use(express.static(path.join(__dirname, '../build')));
//where to find static folder
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//local mongo db
//replace the admin:<password> to your admin name 
const myConnectionString = 'mongodb+srv://admin:Krystian1@cluster0.dnxw6.mongodb.net/movies?retryWrites=true&w=majority';
//connection string to connect with mongo db
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//define Schema 
const Schema = mongoose.Schema;

//define Schema
var movieSchema = new Schema({
    //Strings
    title: String,
    year: String,
    poster: String
});

//use the Schema to create a new model for our database
//anytime I want to interact with the database, I can refer to a MovieModel
var MovieModel = mongoose.model("movie", movieSchema);

//New Root point 
app.get('/api/movies', (req, res) => {

    //constant mymovies
    // const mymovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];


    //Interact with the database 
    //find() - finds all documents in my database 
    MovieModel.find((err, data) => {
        res.json(data);
    })

    //pass to the server 
    //sending the json, send status code 200
    // res.status(200).json({
    //     //passing a message
    //     message: "Everything is okay",
    //     movies: mymovies
    // });
})

//logic the server goes and gives a document with a particular ID 
//method listening to get request
app.get('/api/movies/:id', (req, res) => {
    //log to the console
    console.log(req.params.id);

    //interact with database movie model
    MovieModel.findById(req.params.id, (err, data) => {
        //send some data
        res.json(data);
    })
})

//method listening for put
app.put('/api/movies/:id', (req, res) => {
    //log to the console
    //pull the id out of the url
    console.log("Update movie: " + req.params.id);
    //pass object containing the new movie
    console.log(req.body);
    //asynchronous calls the database 
    //find record with an ID and update it
    MovieModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, 
        (err, data) => {
            //send the data back
            res.send(data);
        })
})

//listening for http delete method 
app.delete('/api/movies/:id' ,(req,res) => {
    //trapping the actual ID so we know that we can get the ID 
    console.log("Delete Movie: " + req.params.id); //this will say I'm deleting this movie
    //delete 
    //match the id back here 
    MovieModel.findByIdAndDelete(req.params.id,
        (err, data) => {
        //send back some data 
        res.send(data);
    }); 

})

//listening to post request
app.post('/api/movies', (req, res) => {
    //when data is passed up, it will take the body of the things passed up and include it 
    console.log('Movie Received!');
    //passing title, year, poster 
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    //Interacting with the model
    MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    })

    //so it doen't add a duplicate 
    res.send('Item Added');

})

//what URL to code to 
// for all other roots '*'
//
app.get('*' , (req, res) => {
    //sending to index.html
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})