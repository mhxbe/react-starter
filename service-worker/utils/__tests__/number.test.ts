import { multiply } from '../number';

describe('number helpers', () => {
  describe('multiply helper', () => {
    it('Should multiply 2 numbes correctly', () => {
      expect(multiply(1, 10)).toEqual(10);
      expect(multiply(5, 5)).toEqual(25);
    });
  });
});
