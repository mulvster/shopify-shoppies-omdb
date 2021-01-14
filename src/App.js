import logo from './logo.svg';
import './App.css';
import MovieSearch from './components/MovieSearch';
import { getData } from './network';
import { useState } from 'react';
// import NominationsList from './components/NominationsList';
import ResultsList from './components/ResultsList';

export default function App() {
  const [movies, setMovies] = useState(null);
  
  const onSubmit = searchTerm => {
   getData(searchTerm).then(data => {
     
    const result = data.Search
     console.log("DATA",result)
     setMovies(result);
   })
  }
  return (
    <div>
      <p onClick={getData}></p>
      <MovieSearch onSubmit={onSubmit}></MovieSearch>

      <h1>HI</h1>
    <ResultsList movies={movies}></ResultsList>
    </div>
  );
}

