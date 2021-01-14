import { useEffect, useState } from 'react';

export default function MovieSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  function submitForm(event) {
    event.preventDefault();
    props.onSubmit(searchTerm);
    setSearchTerm("");
  }

  return (
    <div className="">
      <form onSubmit={submitForm}>
        <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
