const express = require('express')
const app = express()
const port = 4000
//include Cors
const cors = require('cors');
//include body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//using cors package everytime 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//New Root point 
app.get('/api/movies', (req, res) => {

    //constant mymovies
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    //pass to the server 
    //sending the json, send status code 200
    res.status(200).json({
        //passing a message
        message: "Everything is okay",
        movies: mymovies
    });
})

//listening to post request
app.post('/api/movies', (req, res) =>{

    //when data is passed up, it will take the body of the things passed up and include it 
    console.log('Movie Received!');
    //passing title, year, poster 
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})