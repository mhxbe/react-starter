import { reverse } from '../string';

describe('string helpers', () => {
  describe('reverse helper', () => {
    it('Should reverse a string', () => {
      expect(reverse('mike')).toEqual('ekim');
    });
  });
});
