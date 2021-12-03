import { fetchPaintingDetails, fetchPaintingsData } from '../api';

export const getAllPaintings = async () => {
  const paintings = [];

  const data = await fetchPaintingsData();
  const sample_data = data.objectIDs.slice(0, 20);

  sample_data.forEach(async (id) => {
    const details = await fetchPaintingDetails(id);
    if (details?.primaryImage !== '' && details?.title !== '') {
      paintings.push(details);
    }
  });

  return paintings;
};
