//importing React
import React from 'react';
import { Movies } from './movies';

export class Read extends React.Component {

    // Pass this read components state to the new movies component
    // the stat has special properties 
    // object movies, it has data about movies
    state = {
        movies: [
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
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]
            
    };

    //whatever is in in div will be displayed 
    //render allows it to be working and successfully display the below header
    //Passing the data from read component to the movies component by creating an object movies
    //state has object called movies, passing movies down as part of an object called movies
    render(){
        return (
            <div>
                <h1>This is the Read component!</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}