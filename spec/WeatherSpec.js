describe('Weather', function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('initialising weather conditions', function() {
    it('has a 25% of being stormy', function() {
      expect(weather.conditions).toContain('Fine', 'Fine', 'Fine', 'Stormy');
    });
  });
});
