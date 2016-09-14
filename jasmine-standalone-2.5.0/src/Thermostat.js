function Thermostat() {
  this.temperature = 20;
  this._MINIMUM = 10;
  this._MAX = null;
}

Thermostat.prototype = {
  checkTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function() {
    this.temperature += 1;
  },

  decreaseTemperature: function() {
    if(this.temperature < this._MINIMUM) {
      throw new Error('cannot decrease further');
    }
    this.temperature -= 1;
  },

  powerSaveOn: function() {
    this._MAX = 25;
  },

  powerSaveOff: function() {
    this._MAX = 32;
  },

};
