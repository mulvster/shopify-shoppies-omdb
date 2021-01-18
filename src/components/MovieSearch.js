import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function MovieSearch(props) {
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);
  const [value] = useDebounce(searchTerm, 250);

  useEffect(() => {
    props.onSubmit(value);
  }, [value])

  function submitForm(event) {
    event.preventDefault();
    props.onSubmit(searchTerm);
    setSearchTerm("");
  }

  return (
    <div className="wrap">
      <div className="search">
        <input className="searchTerm" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} type="text"  placeholder="Search movie title"></input>
          <button type="submit" class="searchButton">
            <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
