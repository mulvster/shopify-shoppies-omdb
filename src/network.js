import axios from 'axios';

export default function getData(title) {
  axios.get(`http://www.omdbapi.com/?t=${title}&apikey=47130d6c`, {
  responseType: 'json',
    }).then(response => {
      console.log("DATA", response.data);
    });
}


