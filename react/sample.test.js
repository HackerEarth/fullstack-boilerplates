describe('frontend sample tests', () => {
  it('should always be used run some simple test or the candidate should be allowed to modify sample.test.js file', (done) => {
    try {
      expect(true).toBe(true);
      done();
    } catch (error) {
      done(error);
    }
  });
});
