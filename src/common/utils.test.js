import { describe, expect, it } from '@jest/globals';
import { dateFormater } from 'common/utils';

describe('Format Date', () => {
  it('should return a formated date (YYYY) from a date input', function () {
    const expectedDate = 2013;
    expect(dateFormater('2013-09-18T15:54:04-0400')).toStrictEqual(expectedDate);
  });
});
