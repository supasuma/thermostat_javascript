function Thermostat() {
  this.temperature = 20;
  this._MINIMUM = 10;
  this.maxTemp = 25;
  this.powerSaveMode = true;
}

Thermostat.prototype = {
  checkTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function() {
    if(this.temperature >= this.maxTemp) {
      throw new Error('cannot exceed max temperature');
    }
    this.temperature += 1;
  },

  decreaseTemperature: function() {
    if(this.temperature < this._MINIMUM) {
      throw new Error('cannot decrease further');
    }
    this.temperature -= 1;
  },

  powerSaveOn: function() {
    this.maxTemp = 25;
    this.powerSaveMode = true;
  },

  powerSaveOff: function() {
    this.maxTemp = 32;
    this.powerSaveMode = false;
  },

  isPowerSaveOn: function() {
    if(this.powerSaveMode === true) {
      return 'power save mode is on';
    } else {
      return 'power save mode is off';
    }
  },

  resetTemp: function() {
    this.temperature = 20;
  },

  energyChecker: function() {
    if(this.temperature < 18) {
        return 'green';
    } else if (this.temperature >= 18 && this.temperature < 25) {
        return 'yellow';
    } else {
        return 'red';
    }
  }

};
