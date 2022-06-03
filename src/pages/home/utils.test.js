import { describe, expect, it } from '@jest/globals';
import { mapHeroesData } from 'pages/home/utils';

const mockedApiHeroesResponse = [
  {
    id: 1011334,
    name: '3-D Man',
    description: '',
    modified: '2014-04-29T14:18:17-0400',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg'
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    events: {
      available: 1,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
          name: 'Secret Invasion'
        }
      ],
      returned: 1
    }
  },
  {
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
  }
];

describe('Format Heroes data', () => {
  it('should return a formated heroes data array', function () {
    const expectedFormatedData = [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg'
        },
        modified: 2014
      },
      {
        id: 1017100,
        name: 'A-Bomb (HAS)',
        description:
          "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg'
        },
        modified: 2013
      }
    ];
    expect(mapHeroesData(mockedApiHeroesResponse)).toStrictEqual(expectedFormatedData);
  });
});
