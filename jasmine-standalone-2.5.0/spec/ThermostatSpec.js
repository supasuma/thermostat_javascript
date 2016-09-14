describe("Thermostat", function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.checkTemperature()).toEqual(20);
  });

  it("temperature can be increased by 1", function() {
    thermostat.increaseTemperature();
    expect(thermostat.checkTemperature()).toEqual(21);
  });

  it("temperature can be decreased by 1", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.checkTemperature()).toEqual(19);
  });

});
