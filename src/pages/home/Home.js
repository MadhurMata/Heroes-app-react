import React, { useEffect, useState } from 'react';

import { useFetch } from 'hooks/useFetch';
import { mapHeroesData } from 'common/utils/utils';

import Layout from 'components/layout/Layout';
import { RegularList } from 'components/regularList/RegularList';
import HeroeCard from 'components/heroeCard/HeroeCard';

function Home() {
  const { loading, data, error } = useFetch('/characters');
  const [items, setItems] = useState();

  useEffect(() => {
    if (data) setItems(mapHeroesData(data.data.results));
  }, [data]);

  if (loading) return <h1>Loading....</h1>;
  return (
    <Layout>
      {items && (
        <RegularList
          items={items}
          resourceName="heroe"
          emptyItemsMessage={`Sorry we couldn't find any heroe`}
          styles="list-grid"
          itemComponent={HeroeCard}
        />
      )}
    </Layout>
  );
}

export default Home;
