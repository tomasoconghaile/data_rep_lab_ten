// importing React
import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    // Pass this read components state to the new movies component
    // the stat has special properties 
    // object movies, it has data about movies
    state = {
        movies: []
    };

    // PROMISE 
    // It gets called each time our component is mounted or becomes active in view 
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            // .then() you write a function when it works and the happy path has been met 
            // updating the state
            // Json of response data is the data coming back as part of the response from the web server
            .then((response) => {
                this.setState({ movies: response.data.Search })
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
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}