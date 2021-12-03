import axios from 'axios';

const url = 'http://localhost:3001';

export const fetchPaintingsData = async () => {
  return axios
    .get(`${url}/paintings`)
    .then((res) => {
      console.log('paintings', res.data);
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
      console.log('details', res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
