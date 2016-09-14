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

  it("won't let temperature go below 10", function() {
    for(var i = 20; i >= thermostat._MINIMUM; i--) {
      thermostat.decreaseTemperature();
    }
    expect(function() { thermostat.decreaseTemperature(); }).toThrowError('cannot decrease further');
  });

  it('in powersave mode sets max temperature to 25', function(){
    thermostat.powerSaveOn();
    expect(thermostat._MAX).toEqual(25);
  });

  it('when power save mode is off max temperature is 32', function(){
    thermostat.powerSaveOff();
    expect(thermostat._MAX).toEqual(32);
  });

});
