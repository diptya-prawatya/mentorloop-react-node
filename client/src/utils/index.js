import { fetchPaintingDetails, fetchPaintingsData } from '../api';

export const getAllPaintings = async () => {
  const paintings = [];

  const data = await fetchPaintingsData();
  const sample_data = data?.objectIDs.slice(0, 20);

  for (let i = 0; i < sample_data.length; i++) {
    const details = await fetchPaintingDetails(sample_data[i]);
    paintings.push(details);
  }

  return paintings;
};
