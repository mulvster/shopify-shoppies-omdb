import axios from 'axios';

export default async function getData(title) {
  return axios.get(`http://www.omdbapi.com/?t=${title}&apikey=47130d6c`, {
    responseType: 'json',
  })
  .then(response => response.data)
}


