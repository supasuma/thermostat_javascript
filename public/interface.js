$(document).ready(function() {


   var thermostat = new Thermostat();

    $("#temperature").text(thermostat.temperature);

    $("").css({backgroundColor:thermostat.energyChecker()});

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
      $("main").css({backgroundColor:thermostat.energyChecker()});
    });

    $("#power-save-on").click(function() {
      thermostat.powerSaveOn();
      $(this).toggleClass("active");
      $('#power-save-off').toggleClass("active");
      $('#power-save-message').text(thermostat.isPowerSaveOn());
    });

    $("#power-save-off").click(function() {
      thermostat.powerSaveOff();
      $('#power-save-on').toggleClass("active");
      $(this).toggleClass("active");
      $('#power-save-message').text(thermostat.isPowerSaveOn());
    });

    $("#enter-city").submit(function(event) {
      var input = $('#enter-city :input');
      var city = (input[0].value);
      event.preventDefault();
      $.getJSON("http://api.wunderground.com/api/e0d820621ded8ea4/conditions/q/GB/"+city+".json", function(data) {
        $("#current-temp").text(data.current_observation.temp_c);
      });
    });



});
