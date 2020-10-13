import React from 'react';
import '../App.css';
export class Footer extends React.Component {

    //whatever is in in div will be displayed 
    //render allows it to be working and successfully display the below header
    render() {
        return (
            <div className="App">
                <h1>My Footer in another component!</h1>
            </div>
        )
    }
}