import React, { useEffect, useState, createContext, useCallback } from 'react';

import { useFetch } from 'hooks/useFetch';
import { mapHeroesData } from 'common/utils/utils';

import Layout from 'components/layout/Layout';
import RegularList from 'components/regularList/RegularList';
import HeroCard from 'components/heroCard/HeroCard';
import Filters from 'components/filters/Filters';

export const TreesContext = createContext();

function Home() {
  const { loading, data, error } = useFetch('/characters');
  const [items, setItems] = useState();
  const [itemsTemp, setItemsTemp] = useState();

  useEffect(() => {
    if (data) {
      setItems(mapHeroesData(data.data.results));
      setItemsTemp(mapHeroesData(data.data.results));
    }
  }, [data]);

  const onItemClick = useCallback(
    (event) => {
      console.log('You clicked ', event.currentTarget);
    },
    [items]
  );

  return (
    <Layout>
      <TreesContext.Provider value={[items, itemsTemp, setItems]}>
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
              resourceName="hero"
              emptyItemsMessage={`Sorry we couldn't find any hero`}
              styles="list-grid"
              itemComponent={HeroCard}
            />
          )
        )}
      </TreesContext.Provider>
    </Layout>
  );
}

export default Home;
