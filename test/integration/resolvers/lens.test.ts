import resolvers from '../../../src/resolvers';

describe('resolvers', () => {
  describe('lens', () => {
    it('should return false if missing', async () => {
      const result = await resolvers.lens('0x556B14CbdA79A36dC33FcD461a04A5BCb5dC2A70');

      expect(result).toBe(false);
    });

    it('should resolve with address', async () => {
      const result = await resolvers.farcaster('0x09CEdb7bb69f9F6DF646dBa107D2bAACda93D6C9')

      expect(result).toBeInstanceOf(Buffer);
      expect(result.length).toBeGreaterThan(1000);
    });
  });
});
