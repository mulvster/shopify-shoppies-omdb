import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch';
import { getData } from './network';
import { useState } from 'react';
import NominationsList from './components/NominationsList';
// import ResultsList from './components/ResultsList';

export default function App() {
  const [movie, setMovie] = useState(null);
  
  const onSubmit = searchTerm => {
   getData(searchTerm).then(data => {
     setMovie(data);
   })
  }
  return (
    <div>
      <p onClick={getData}>{movie}</p>
      <MovieSearch onSubmit={onSubmit}></MovieSearch>

      <h1>HI</h1>
      <NominationsList>
        {movie &&
          movie.map((movieParam, index) => {
            const movieTitle = movieParam.title;
              const movieReleaseDate = new Date(movieParam.released).toDateString();
              {/* const actors = movie.actors.join(', '); */}

              return (
                <div className="movie" key={index}>
                  <h3>Movie {index + 1}</h3>
                  <h2>{movieParam.title}</h2>

                  {/* <div className="details">
                    <p>👨: {actors}</p>
                    <p>⏰: {movieReleaseDate}</p>
                  </div> */}
                </div>
              );
            })}
      </NominationsList>
    </div>
  );
}

