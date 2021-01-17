import React from 'react';

export default function ResultsList(props) {
  return (
    <div className="result-list">
    <ul className="cards">
      {
        !!props.movies && props.movies.map((movie, index) => {
          const movieTitle = movie.Title;
          const movieid = movie.imdbID;

          const movieReleaseDate = new Date(movie.Released).toDateString();

          return (
          
            <li className="cards__item" key={movieid}>
              <div className="card">
                <div className="card__content movie" internalnumber={index} movieid={movieid}>
                  <div className="card__title">
                    {
                    movie.nominated && <p>Nominated</p>
                    }
                    <h2 className="medium-font">{movie.Title}</h2>
                  </div>
                  <button disabled={movie.nominated} className={`card-button ${movie.nominated ? "disabled" : "enabled"}`} onClick={() => props.addToNominationList(movie)}>Nominate</button>
                </div>
              </div>
            </li>
         
          );
        })
      }
    </ul>
    </div>
  );
}
