import { describe, expect, it } from '@jest/globals';
import { dateFilter, descriptionFilter, searchFilter } from 'components/filters/utils';

describe('Filters test', () => {
  it('should show characters with date from 20 century', function () {
    const filteredDataMock = [
      {
        modified: 2014
      },
      {
        modified: 2022
      },
      {
        modified: 1999
      },
      {
        modified: 2000
      },
      {
        modified: 1986
      }
    ];

    const expectedResponse = [
      {
        modified: 1999
      },
      {
        modified: 1986
      }
    ];
    expect(dateFilter(filteredDataMock, '1')).toStrictEqual(expectedResponse);
  });

  it('should show characters with date from 21 century', function () {
    const filteredDataMock = [
      {
        modified: 2014
      },
      {
        modified: 2022
      },
      {
        modified: 1999
      },
      {
        modified: 2000
      },
      {
        modified: 1986
      }
    ];

    const expectedResponse = [
      {
        modified: 2014
      },
      {
        modified: 2022
      },

      {
        modified: 2000
      }
    ];
    expect(dateFilter(filteredDataMock, '2')).toStrictEqual(expectedResponse);
  });

  it('should show characters with date from 21 century', function () {
    const filteredDataMock = [
      {
        modified: 2014
      },
      {
        modified: 2022
      },
      {
        modified: 1999
      },
      {
        modified: 2000
      },
      {
        modified: 1986
      }
    ];
    expect(dateFilter(filteredDataMock, '')).toStrictEqual(filteredDataMock);
  });

  it('should show return a list of items with description', function () {
    const filteredDataMock = [
      {
        description: 'Description'
      },
      {
        description: ''
      },
      {
        description: ''
      },
      {
        description: 'Description'
      },
      {
        description: 'Description'
      }
    ];

    const filteredDataResponse = [
      {
        description: 'Description'
      },
      {
        description: 'Description'
      },
      {
        description: 'Description'
      }
    ];
    expect(descriptionFilter(filteredDataMock)).toStrictEqual(filteredDataResponse);
  });

  it('should show returnfilter list of items by name', function () {
    const filteredDataMock = [
      {
        name: 'Agent Brand'
      },
      {
        name: 'Agent X (Nijo)'
      },
      {
        name: 'Agents of Atlas'
      },
      {
        name: 'Agent Zero'
      },
      {
        name: 'Air-Walker (Gabriel Lan)'
      }
    ];

    const filteredDataResponse = [
      {
        name: 'Agent Zero'
      }
    ];
    expect(searchFilter(filteredDataMock, 'z')).toStrictEqual(filteredDataResponse);
  });
});
