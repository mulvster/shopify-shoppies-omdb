import './App.css';
import '../src/styles.css';
import MovieSearch from './components/MovieSearch';
import { getData } from './network';
import { useState } from 'react';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [nominationsList, setNominationsList] = useState([]);


  const onSubmit = searchTerm => {
   getData(searchTerm).then(data => {
    const result = data.Search
     setMovies(result);
   })
  }

  const addToNominationList = nomination => {
    const movie = {...nomination, nominated: true}
    setMovies(movies.map(m => m.imdbID === nomination.imdbID ? movie : m))
    console.log('ADD TO NOMINATION LIST', nomination);
    setNominationsList([...nominationsList, movie])
  }

  const removeNomination = nomination => {
    const movie = {...nomination, nominated: false}
    setMovies(movies.map(m => m.imdbID === nomination.imdbID ? movie : m))
    console.log('REMOVE FROM NOMINATION LIST', nomination);
    setNominationsList(nominationsList.filter(m => m.imdbID !== movie.imdbID))
  }

  return (
  <div>
    <section id="section-one">
      <article className="display-flex">
        <div className="row">
          <div className="left-container">
              <h1 className="large-font">Shopify Shoppies Movie Search Bar Extravaganza</h1>
              <p onClick={getData}></p>
              <h2 className="medium-font">Movie Title</h2>
            <MovieSearch onSubmit={onSubmit}></MovieSearch>
          </div>
        </div>
      </article>
    </section>

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
          <NominationsList movies={nominationsList} removeNomination={removeNomination}></NominationsList> 
        </section>
      </div>
    </section>
  </div>
  );
}