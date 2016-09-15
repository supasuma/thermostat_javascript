$(document).ready(function() {

   var thermostat = new Thermostat();

    $("#temperature").text(thermostat.temperature);

    $("body").css({backgroundColor:thermostat.energyChecker()});

    $("#temperature-up").click(function() {
        thermostat.increaseTemperature();
        $("#temperature").text(thermostat.temperature);
        $("body").css({backgroundColor:thermostat.energyChecker()});
    });
    $("#temperature-down").click(function() {
        thermostat.decreaseTemperature();
        $("#temperature").text(thermostat.temperature);
        $("body").css({backgroundColor:thermostat.energyChecker()});
    });

    $("#reset").click(function() {
      thermostat.resetTemp();
      $("#temperature").text(thermostat.temperature);
      $("body").css({backgroundColor:thermostat.energyChecker()});
    });

    $("#power-save-on").click(function() {
      thermostat.powerSaveOn();
      $('#power-save-message').text(thermostat.isPowerSaveOn());
    });

    $("#power-save-off").click(function() {
      thermostat.powerSaveOff();
      $('#power-save-message').text(thermostat.isPowerSaveOn());
    });

});
