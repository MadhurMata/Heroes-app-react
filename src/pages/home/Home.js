import React, { useEffect, useState, createContext } from 'react';

import { useFetch } from 'hooks/useFetch';
import { mapHeroesData } from 'pages/home/utils';

import Layout from 'components/layout/Layout';
import RegularList from 'components/regularList/RegularList';
import HeroCard from 'components/heroCard/HeroCard';
import Filters from 'components/filters/Filters';
import Loader from 'components/loader/Loader';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

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

  return (
    <Layout>
      <TreesContext.Provider value={[items, itemsTemp, setItems]}>
        <Filters />
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <ErrorMessage message="Error loading data!..." />
        ) : (
          items && (
            <RegularList
              items={items}
              resourceName="hero"
              emptyItemsMessage="Sorry we couldn't find any hero with the filters selected"
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
