import React, { useEffect, useState } from 'react';

import { useFetch } from 'hooks/useFetch';
import { mapHeroesData } from 'common/utils/utils';

import Layout from 'components/layout/Layout';
import { RegularList } from 'components/regularList/RegularList';
import HeroeCard from 'components/heroeCard/HeroeCard';
import Filters from 'components/filters/Filters';

function Home() {
  const { loading, data, error } = useFetch('/characters');
  const [items, setItems] = useState();

  useEffect(() => {
    if (data) setItems(mapHeroesData(data.data.results));
  }, [data]);

  return (
    <Layout>
      <Filters />
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div>
          <h5>Error loading data!...</h5>
        </div>
      ) : (
        items && (
          <RegularList
            items={items}
            resourceName="heroe"
            emptyItemsMessage={`Sorry we couldn't find any heroe`}
            styles="list-grid"
            itemComponent={HeroeCard}
          />
        )
      )}
    </Layout>
  );
}

export default Home;
