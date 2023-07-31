import React from 'react'

const Ratings = ({movie}) => {

  return (
    <>
      <div>IMDb Ratings: {movie.imdbRating}</div>
      <div>IMDb Votes: {movie.imdbVotes}</div>
    </>
  )
}

export default Ratings