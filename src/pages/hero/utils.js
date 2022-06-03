import { dateFormater } from 'common/utils';

/**
 * Maps API response returning only needed data:
 * @param {object} hero Hero data.
 */
export const mapHeroData = (hero) => {
  const { name, description, thumbnail, events, modified } = hero;

  return {
    name,
    description,
    thumbnail,
    events,
    modified: dateFormater(modified)
  };
};
