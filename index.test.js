/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 0 if birthday is yesterday', () => {
    expect(birthday.howOld(new Date('31 Dec 2017'))).toBe(0);
  });

  test('Returns 0 if today is day before first birthday', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });

  test('Returns 1 if birthday was a year ago', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 5 if today is five years and one day after birthday', () => {
    expect(birthday.howOld(new Date('31 Dec 2012'))).toBe(5);
  });
});
