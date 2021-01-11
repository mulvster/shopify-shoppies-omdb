import logo from './logo.svg';
import './App.css';
import getData from '../src/network';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    getData('The Grinch')
    .then(data => {
      console.log("data from app", data)
    })
    .catch(error => {
      console.log("error getting data, maybe show an error message to the user instead of just console logging")
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
