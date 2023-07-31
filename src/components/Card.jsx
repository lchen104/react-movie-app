import React from 'react'
import { StyledCard } from './styles/Card.styled'



const Card = ({movie}) => {

  const handleChange = (e) => {

  }

  return (
    <>
      <StyledCard>
        <div>
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>

        </div>
        <div>
            <div><h1>{movie.Title}</h1></div>
            <div><span>Released </span>{movie.Year}</div>
            <div><span>Genre </span>{movie.Genre}</div>
            <div><p>{movie.Plot}</p></div>
            <div><span>Director </span>{movie.Director}</div>
            <div><span>Writer </span>{movie.Writer}</div>
            <div><span>Actors </span>{movie.Actors}</div>
            <div><span>Run-time </span>{movie.Runtime}</div>
            <div><span>Rated </span>{movie.Rated}</div>
            <div><span>Language </span>{movie.Language}</div>
            <div><span>Country </span>{movie.Country}</div>
            <div><span>Ratings </span>{movie.Ratings[0].Source}: {movie.Ratings[0].Value} - {movie.Ratings[1].Source}: {movie.Ratings[1].Value} </div>
            <div><span>Meta Score </span>{movie.Metascore}</div>
            <div><span>IMDb Rating </span>{movie.imdbRating}</div>
            <div><span>IMDb Votes </span>{movie.imdbVotes}</div>
            <div><span>Box Office </span>{movie.BoxOffice}</div>
            <div><span>DVD: </span>{movie.DVD}</div>
            <div><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
            <p>
              <input 
                type='checkbox' 
                value={movie.favorites}
                onChange={(e) =>
                {addFavorite(movie.id, e)}
              }>
              </input> Add to Favorites
            </p>
        </div>
      </StyledCard>
      
    </>
  )
}

export default Card