import React, { useEffect } from 'react';

import { useFetch } from 'hooks/useFetch';

import Layout from 'components/layout/Layout';

function Home() {
  const { loading, data, error } = useFetch('/characters');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <Layout></Layout>;
}

export default Home;
