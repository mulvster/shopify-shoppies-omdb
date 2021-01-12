import * as network from './network'
import { useEffect, useState } from 'react';

export default function MovieSearch(props) {
  const [movie, setMovie] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData()
  },[])

  function getData() {
    network.getData()
    .then(data => {
      setMovie(data.movie)
    })
  }

  function submitForm(event) {
    event.preventDefault();
    props.onSubmit(searchTerm);
    setSearchTerm("");
  }

  return (
    <div className="App">
      <p onClick={getData}>{movie}</p>
      <form onSubmit={submitForm}>
        <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
