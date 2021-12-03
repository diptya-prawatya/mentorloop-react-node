import React, { useEffect, useState } from 'react';

import { getAllPaintings } from './utils';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(getAllPaintings());
  }, []);

  return <></>;
}

export default App;
