import React from 'react';

export default function ResultsList(props) {
  return (
    <div className="result-list">
    {!!props.movies &&
  props.movies.map((movieParam, index) => {
    const movieTitle = movieParam.Title;
    console.log(movieTitle)
      const movieReleaseDate = new Date(movieParam.Released).toDateString();
      {/* const actors = movie.actors.join(', '); */}

      return (
        <div className="movie" key={index}>
          <h3>Movie {index + 1}</h3>
          <h2>{movieParam.Title}</h2>

          {/* <div className="details">
            <p>👨: {actors}</p>
            <p>⏰: {movieReleaseDate}</p>
          </div> */}
        </div>
      );
    })}
    </div>
  );
}