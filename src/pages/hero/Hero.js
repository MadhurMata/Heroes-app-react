import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { mapHeroData } from 'pages/hero/utils';

import Layout from 'components/layout/Layout';
import RegularList from 'components/regularList/RegularList';
import EventCard from 'components/eventCard/EventCard';
import ImageContainer from 'components/imageContainer/ImageContainer';
import Loader from 'components/loader/Loader';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

function Hero() {
  const params = useParams();
  const { loading, data, error } = useFetch(`/characters/${params.heroId}`);
  const [hero, setHero] = useState();

  useEffect(() => {
    if (data) {
      setHero(mapHeroData(data.data.results[0]));
    }
  }, [data]);

  return (
    <Layout>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorMessage message="Error loading data!..." />
      ) : (
        hero && (
          <>
            <section className="hero-detail-top">
              <ImageContainer
                url={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                altSource={hero.name}
                stylesProp="hero-detail-top__img-container"
              />
              <div className="hero-detail-top__info-container">
                <h2>{hero.name}</h2>
                <h3>{hero.modified}</h3>
                <p>{hero.description}</p>
              </div>
            </section>
            <section className="hero-detail-bottom">
              {hero.events.available > 0 ? (
                <>
                  <h4>Events</h4>
                  <RegularList
                    items={hero.events.items}
                    resourceName="event"
                    styles="regular-list"
                    itemComponent={EventCard}
                  />
                </>
              ) : null}
            </section>
          </>
        )
      )}
    </Layout>
  );
}

export default Hero;
