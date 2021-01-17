import React from 'react';

export default function ResultsList(props) {
  return (
    <div className="result-list">
      {
        !!props.movies && props.movies.map((movie, index) => {
          const movieTitle = movie.Title;
          const movieid = movie.imdbID;

          const movieReleaseDate = new Date(movie.Released).toDateString();

          return (
          <ul class="cards">
            <li class="cards__item">
              <div className="card">
                <div className="card__content movie" key={movieid} internalnumber={index} movieid={movieid}>
                  <div className="card__title">
                    {
                    movie.nominated && <p>Nominated</p>
                    }
                    <h2 className="medium-font">{movie.Title}</h2>
                  </div>
                  <button className="card-button" onClick={() => props.addToNominationList(movie)}>Nominate me</button>
                </div>
              </div>
            </li>
          </ul>
          );
        })
      }
    </div>
  );
}
