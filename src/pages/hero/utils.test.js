import { describe, expect, it } from '@jest/globals';
import { mapHeroData } from 'pages/hero/utils';

const mockedApiSingleHeroResponse = {
  id: 1017100,
  name: 'A-Bomb (HAS)',
  description:
    "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
  modified: '2013-09-18T15:54:04-0400',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
    extension: 'jpg'
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
  series: {
    available: 2,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/series',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
        name: 'FREE COMIC BOOK DAY 2013 1 (2013)'
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
        name: 'Hulk (2008 - 2012)'
      }
    ],
    returned: 2
  },
  events: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/events',
    items: [],
    returned: 0
  },
  urls: [
    {
      type: 'detail',
      url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=0bcf8d98f3e7540327e63fa3a911f9b9'
    },
    {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=0bcf8d98f3e7540327e63fa3a911f9b9'
    }
  ]
};

describe('Format Heroe data', () => {
  it('should return a formated heroe data', function () {
    const expectedFormatedData = {
      name: 'A-Bomb (HAS)',
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
        extension: 'jpg'
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/events',
        items: [],
        returned: 0
      },
      modified: 2013
    };
    expect(mapHeroData(mockedApiSingleHeroResponse)).toStrictEqual(expectedFormatedData);
  });
});
