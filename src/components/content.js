import React from 'react';
import '../App.css';

export class Content extends React.Component {

    //whatever is in in div will be displayed 
    //render allows it to be working and successfully display the below header
    // "{new Date().toLocaleTimeString()}" - displays currnet time on screen
    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}