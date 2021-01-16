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
    nomination.nominated = true;
    const movie = {...nomination, nominated: true}
    setMovies(movies.map(m => m.imdbID === nomination.imdbID ? movie : m))
    console.log('ADD TO NOMINATION LIST', nomination);
    setNominationsList([...nominationsList, movie])
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

    <section id="section-two">
      <article className="display-flex">
        <div className="row">
        <div className="margin-auto">
            <div className="row">
              <div className="card">
                <div className="card__content">
                  <div className="card__title">
                  <h2 className="medium-font">After Search Results</h2>
                  </div>
                  <ResultsList addToNominationList={addToNominationList} movies={movies}></ResultsList>
                </div>
              </div>
            </div>
          </div>
          <div className="margin-auto left-container">
              <p onClick={getData}></p>
          </div>
          <div className="margin-auto">
            <div className="row">
              <div className="card">
                <div className="card__content">
                  <div className="card__title">
                    <h4 className="medium-font">Nominations List</h4>
                  </div>
                  <NominationsList nominationsList={nominationsList}></NominationsList> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
  );
}