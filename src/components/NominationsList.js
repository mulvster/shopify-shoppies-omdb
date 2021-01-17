import React from 'react'; 
import { useState ,useCallback } from 'react';
import ResultsList from './ResultsList';

export default function NominationsList(props) {
  
  return (
    <div className="nomination-list">
    <ul className="cards">
      {
        !!props.movies && props.movies.map((movie, index) => {
          const movieTitle = movie.Title;
          const movieid = movie.imdbID;

          const movieReleaseDate = new Date(movie.Released).toDateString();

          return (
          
            <li className="cards__item" key={movieid} >
              <div className="card">
                <div className="card__content movie" internalnumber={index} movieid={movieid}>
                  <div className="card__title">
                    <h2 className="medium-font">{movie.Title}</h2>
                  </div>
                  <button className="card-button" onClick={() => props.removeNomination(movie)}>Remove</button>
                </div>
              </div>
            </li>
         
          );
        })
      }
    </ul>
    </div>
  )
}