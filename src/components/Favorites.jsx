import React from 'react'
import { useState } from 'react';

const Favorites = ({ movie, addFavorite }) => {

  return (
    <>
      <div>Favorites</div>
      <ul>
        {movie.map((movie, index) => {
          return (
            <li key={index}>{movie.index}</li>
          )
        })}

      </ul>
    </>
  )
}

export default Favorites