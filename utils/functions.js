import axios from 'axios';
import { toast } from 'react-hot-toast';

// const api_url = 'https://stalewolf.onrender.com';
const api_url = 'http://localhost:5000';

// Axios functions
export function fetchSongs() {
  return axios.get(`${api_url}/api/music`).then((res) => res.data);
}
export function makeARequest(song) {
  return axios.post(`${api_url}/api/request`, {
    name: `${song.name} - ${song.artists[0].name}`,
    lastName: `${song.album.cover[0].url}`,
  });
}
export function getAllRequests() {
  return axios.get(`${api_url}/api/request`).then((res) => res.data);
}

export function getMyRequests() {
  return axios
    .get(`${api_url}/api/request/me`, {
      withCredentials: true,
    })
    .then((res) => res.data);
}

export function markAsPlayed(id) {
  return axios
    .put(`${api_url}/api/request/${id}`, {
      isPlayed: true,
    })
    .then((res) => res.data)
    .then(() => {
      toast.success('Marked as played');
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data.message);
    });
}
export function markAsUnavailable(id) {
  return axios
    .put(`${api_url}/api/request/${id}`, {
      isAvailable: false,
    })
    .then((res) => res.data)
    .then(() => {
      toast.success('Marked as unavailable');
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data.message);
    });
}

// Helper Functions

export function getYearFromDate(date) {
  return date.split('-')[0];
}

export function getRelativeTime(timestamp) {
  const secondsAgo = Math.floor((Date.now() - timestamp) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} seconds ago`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  }
}
