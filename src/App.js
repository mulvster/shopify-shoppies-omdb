import logo from './logo.svg';
import './App.css';
import MovieSearch from './MovieSearch';

export default function App() {
  const onSubmit = searchTerm => {
    console.log("inside app.js", searchTerm)

  }

  return (
    <MovieSearch onSubmit={onSubmit}></MovieSearch>
  );
}

