import React from 'react';
//importing Card 
import Card from 'react-bootstrap/Card';
//help change the url of the application
//once this is clicked i wanted to change the url of the application and pass up the idea of the document we're working on
//import Link 
import {Link} from 'react-router-dom';
//Button react bootstrap
import Button from 'react-bootstrap/Button';
//import axois
import axios from 'axios';

export class MovieItem extends React.Component {

    constructor(){
        //invoke the parents constructor
        super();

        //delete movie method
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        //this will stop this being happening or that this method getting called every time I load the page 
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id);
        //use axios
        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
        //promise 
        //arrow function to go and invoke that method
        .then(()=> {
            this.props.ReloadData();
        })
        .catch();
    }
    //this component is designed to display the data 
    //the card is used for better display of the data, it give a better look of the page 
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to ={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div>
        );
    }
}