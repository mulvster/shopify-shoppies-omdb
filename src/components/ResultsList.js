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
          const nominationDisabled = !props.canNominate || movie.nominated
          return (
          
            <li className="cards__item" key={movieid}>
              <div className="card">
                <div className="card__content movie" internalnumber={index} movieid={movieid}>
                  <div className="card__title">
                    {
                    movie.nominated && <p className="already-nominated">Nominated</p>
                    }
                    <h2 className="medium-font">{movie.Title} ({movie.Year})</h2>
                  </div>
                  <button disabled={nominationDisabled} className={`card-button ${nominationDisabled ? "disabled" : "enabled"}`} onClick={() => props.addToNominationList(movie)}>Nominate</button>
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
