import axios from 'axios';

const url = 'http://localhost:3001';

export const fetchPaintingsData = async () => {
  return axios
    .get(`${url}/paintings`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchPaintingDetails = async (id) => {
  return axios
    .get(`${url}/details/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
