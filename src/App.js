import { useState } from 'react';
import useLocalStorage from 'react-use-localstorage';

import './App.css';
import '../src/styles.css';

import { getData } from './network';

import MovieSearch from './components/MovieSearch';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [nominationsList, setNominationsList] = useLocalStorage("useLocalStorage", "[]");

  const updateMovies = (movies, nominationsList) => {
    const list = JSON.parse(nominationsList)
    setMovies(movies.map(m => list.find(n => n.imdbID === m.imdbID) ? {...m, nominated: true} : m))
  }

  const onSubmit = searchTerm => {
   getData(searchTerm).then(data => {
    const result = data.Search
    if (result) {
      updateMovies(result, nominationsList)
    }
   })
  }

  const addToNominationList = nomination => {
    const list = JSON.stringify([...JSON.parse(nominationsList), nomination])
    setNominationsList(list)
    updateMovies(movies, list)
  }

  const removeNomination = nomination => {
    const movie = {...nomination, nominated: false}
    setMovies(movies.map(m => m.imdbID === nomination.imdbID ? movie : m))
    console.log('REMOVE FROM NOMINATION LIST', nomination);
    setNominationsList(JSON.stringify(JSON.parse(nominationsList).filter(m => m.imdbID !== movie.imdbID)))
  }

  return (
  <div>
    <section className="section-one">
      <article className="display-flex">
        <div className="row">
          <div className="">
              <h1 className="large-font">Shopify Shoppies</h1>
              <p onClick={getData}></p>
              <div className="movie-search-container">
                <h2 className="medium-font">Movie Title</h2>
                <MovieSearch onSubmit={onSubmit}></MovieSearch>
              </div>
          </div>
        </div>
      </article>
    </section>
    {JSON.parse(nominationsList).length === 5 && <div className="banner"><h2>{JSON.parse(nominationsList).length} Nominations</h2></div>}
    <section className="section-two">
      <div className="row">
        <section className="card__container">
          <p onClick={getData}></p>
          <h2 className="medium-font">Search Results</h2>
          <ResultsList addToNominationList={addToNominationList} movies={movies}></ResultsList>
        </section>
      </div>
      <div className="row">
        <section className="card__container">
          <h2 className="medium-font">Nominations List</h2>
          <NominationsList movies={JSON.parse(nominationsList)} removeNomination={removeNomination}></NominationsList> 
        </section>
      </div>
    </section>
  </div>
  );
}