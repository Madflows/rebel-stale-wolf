import axios from 'axios';

export function fetchSongs() {
  return axios
    .get('https://stalewolf.onrender.com/api/music')
    .then((res) => res.data);
}
export function makeARequest(song) {
  return axios.post('https://stalewolf.onrender.com/api/request', {
    name: `${song.name} - ${song.artists[0].name}`,
    lastName: `${song.album.cover[0].url}`,
  });
}
export function getAllRequests(song) {
  return axios
    .get('https://stalewolf.onrender.com/api/request')
    .then((res) => res.data);
}

export function getYearFromDate(date) {
  return date.split('-')[0];
}
