import React from 'react';
//importing Card 
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

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
                </Card>

            </div>
        );
    }
}