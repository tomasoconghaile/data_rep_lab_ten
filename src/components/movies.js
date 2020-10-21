import React from 'react';
//importing movieItem
import {MovieItem} from './movieItem';

export class Movies extends React.Component{


    //log this.props to access what's been passed as a property to this new component 
    //function - "this.props.movies.map()" it's passed as the property as part of the property of this class
    //in the return method, it splits the collection using the map function, this splits them into 4 individual movies 
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie} key={movie.imdbID}></MovieItem>
        })
    }
}