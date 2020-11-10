import { render } from '@testing-library/react';
import React from 'react';
//import axios
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();

        // binding the events
        // onSubmit - is the method that gets called when the button on our form is clicked 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    // gets called when the value of our input control changes
    // when the value changes it will update this state
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    // onChangeYear method 
    // e is the event coming back when it's invoked 
    // setState - updating our state or object for storing
    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    // onChangePoster method 
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    // Method onSubmit, takes an argument 'e'
    // e.prevenet.Default() will stop us from calling this button multiple of times
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        //creating new object 
        const newMovie = {
            //creating lowercase as there is already uppercase
            //server is listening for lowercase that's why it's being used
            //sending them up
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        //axios - post method 
        //send data to the server
        axios.post('http://localhost:4000/api/movies',newMovie)
        //return a promise 
        //making post request asynchronously 
        .then((res)=> {
            //response coming back
            //response to the console
            console.log(res);
        })
        //error
        .catch((err)=>{
            console.log(err);
        });
    }

    // onSubmit - when the button is clicked it gonna invoke a method thisonSubmit
    // first div is for the input control
    // the buttom one is for the submit button
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Movie Poster: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>


                    <div className='form-group'>
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}