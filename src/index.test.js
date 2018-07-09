import {
  a,
  b,
  c,
} from '.';

describe('library', () => {
  const consoleLog = jest.spyOn(console, 'log');

  afterEach(() => {
    consoleLog.mockClear();
  });

  describe('a', () => {
    it('console logs "a"', () => {
      a();
      expect(consoleLog).toHaveBeenCalledTimes(1);
      expect(consoleLog).toHaveBeenCalledWith('a');
    });
  });
  describe('b', () => {
    it('console logs "b"', () => {
      b();
      expect(consoleLog).toHaveBeenCalledTimes(1);
      expect(consoleLog).toHaveBeenCalledWith('b');
    });
  });
  describe('c', () => {
    it('console logs "c"', () => {
      c();
      expect(consoleLog).toHaveBeenCalledTimes(1);
      expect(consoleLog).toHaveBeenCalledWith('c');
    });
  });
});
