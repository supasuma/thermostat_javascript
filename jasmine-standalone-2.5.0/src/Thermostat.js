function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype = {
  checkTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function() {
    this.temperature += 1;
  },

  decreaseTemperature: function() {
    this.temperature -= 1;
  }

};
