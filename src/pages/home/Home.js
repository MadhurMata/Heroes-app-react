import React, { useEffect } from 'react';

import { useFetch } from 'hooks/useFetch';

function Home() {
  const { loading, data, error } = useFetch('/characters');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>Home</div>;
}

export default Home;
