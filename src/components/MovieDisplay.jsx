import React from 'react';
import Card from './Card';

const MovieDisplay = ({movie}) => {

    const loaded = () => {
        return (
            <>
                <Card movie={movie}/>
            </>
        );
        
    };

    const loading = () => {
        return <h1>No Movie to Display</h1>
    };
    console.log(movie)
    return movie ? loaded() : loading();
    
};




export default MovieDisplay;