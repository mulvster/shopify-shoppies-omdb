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
            <div className="movie" key={movieid} internalnumber={index} movieid={movieid} >
              <h3>Movie Number {index + 1}</h3>
              <h2>{movie.Title}</h2>
              {
                movie.nominated && <p>Nominated</p>
              }
              <button onClick={() => props.addToNominationList(movie)}>Nominate me</button>
            </div>
          );
        })
      }
    </div>
  );
}