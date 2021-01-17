import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function MovieSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [value] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    props.onSubmit(value);
  }, [value])

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
