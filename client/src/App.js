import React, { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Loader from 'react-loader-spinner';
import Modal from 'react-modal';
import useScreenOrientation from 'react-hook-screen-orientation';

import { fetchPaintingDetails } from './api';
import { getAllPaintings } from './utils';
import { imageLandscapeStyles, imagePortraitsStyles, loadingStyles, modalStyles } from './styles';

Modal.setAppElement('#root');

function App() {
  const [data, setData] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(true);
  const [show, setShow] = useState(false);

  const screenOrientation = useScreenOrientation();

  const fetchData = async () => {
    const paintings = await getAllPaintings();
    if (paintings.length === 20) {
      setData(paintings);
      setLoading(false);
    }
  };

  const onClickButton = async (id) => {
    const clicked = await fetchPaintingDetails(id);

    setDetails(clicked);
    setSlide(false);
    setShow(true);
  };

  const closeModal = () => {
    setSlide(true);
    setShow(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} style={loadingStyles} />
  ) : (
    <>
      <Carousel autoPlay={slide} interval={10000} infiniteLoop={true} showThumbs={false}>
        {data.map((key, index) => (
          <div key={data[index]?.objectID} onClick={() => onClickButton(data[index]?.objectID)}>
            <img
              src={`${data[index]?.primaryImage}`}
              alt=""
              style={
                screenOrientation === 'landscape-primary' ||
                screenOrientation === 'landscape-secondary'
                  ? imageLandscapeStyles
                  : imagePortraitsStyles
              }></img>
          </div>
        ))}
      </Carousel>

      <Modal isOpen={show} onRequestClose={() => closeModal()} style={modalStyles}>
        <h1>{details?.title}</h1>
        <h3>{'Department: ' + details?.department}</h3>
        <p>
          {'Accession Number - Year: ' + details?.accessionNumber + ' - ' + details?.accessionYear}
        </p>
        <p>{'Culture: ' + details?.culture}</p>
        <p>{'Period: ' + details?.period}</p>
        <p>{'Medium: ' + details?.medium}</p>
        <p>{'Dimensions: ' + details?.dimensions}</p>
        <p>{'Region : ' + details?.region}</p>
        <p>{details?.creditLine}</p>
        <button onClick={() => closeModal()}>Close</button>
      </Modal>
    </>
  );
}

export default App;
