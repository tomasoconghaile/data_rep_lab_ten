// importing React
import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    //binding tool
     constructor(){
         //invoke the parent constructor
         super();

         //binding
         this.ReloadData = this.ReloadData.bind(this);
     }

    // Pass this read components state to the new movies component
    // the stat has special properties 
    // object movies, it has data about movies
    state = {
        movies: []
    };

    // PROMISE 
    // It gets called each time our component is mounted or becomes active in view 
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            // .then() you write a function when it works and the happy path has been met 
            // updating the state
            // Json of response data is the data coming back as part of the response from the web server
            .then((response) => {
                //changed from Search to movies as it has been changed
                this.setState({ movies: response.data})
            })
            // .catch() writing function so it says OK if things don't workout
            // * unfulfilled - for the error coming back *
            .catch((error) => {
                console.log(error)
            });
    }
    
    //reload method that will reload all the data
    //This is going to go off after database and get me all the movies I have in my database
    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        // .then() you write a function when it works and the happy path has been met 
        // updating the state
        // Json of response data is the data coming back as part of the response from the web server
        .then((response) => {
            //changed from Search to movies as it has been changed
            this.setState({ movies: response.data})
        })
        // .catch() writing function so it says OK if things don't workout
        // * unfulfilled - for the error coming back *
        .catch((error) => {
            console.log(error)
        });
    }

    // whatever is in in div will be displayed 
    // render allows it to be working and successfully display the below header
    // Passing the data from read component to the movies component by creating an object movies
    // state has object called movies, passing movies down as part of an object called movies
    render() {
        return (
            <div>
                <h1>This is the Read component!</h1>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}