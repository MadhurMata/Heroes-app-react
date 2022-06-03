import { dateFormater } from 'common/utils';

/**
 * Maps API response returning only needed data:
 * @param {array} heroesList List of heroes.
 */
export const mapHeroesData = (heroesList) => {
  return heroesList.map((hero) => {
    const { name, id, description, thumbnail, modified } = hero;
    return {
      id,
      name,
      description,
      thumbnail,
      modified: dateFormater(modified)
    };
  });
};
