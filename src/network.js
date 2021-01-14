import axios from 'axios';

export function getData(title) {
  return axios.get(`http://www.omdbapi.com/?s=${title}&apikey=47130d6c`, {
    responseType: 'json',
  })
  .then(response => response.data)
}


