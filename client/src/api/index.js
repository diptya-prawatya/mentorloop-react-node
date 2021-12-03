import axios from 'axios';

const url = 'http://localhost:3001';

export const fetchPaintingsData = async () => {
  return fetch(`${url}/paintings`)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchPaintingDetails = async (id) => {
  return fetch(`${url}/details/${id}`)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};
