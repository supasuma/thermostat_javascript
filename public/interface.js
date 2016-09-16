$(document).ready(function() {
  var thermostat = new Thermostat();
  loadWeather();





   function saveWeather() {
     $.post("http://localhost:9292/temperature", {temperature: thermostat.checkTemperature(), mode: thermostat.isPowerSaveOn()});
   }

   function loadWeather() {
     $.get("http://localhost:9292/temperature", function(data) {
       var dataParse = JSON.parse(data);
       thermostat.temperature = dataParse.temperature;
       thermostat.powerSaveMode = dataParse.mode;
      $("#temperature").text(thermostat.temperature);
        $("#right").css({backgroundColor:thermostat.energyChecker()});
     });
   }




    // $("").css({backgroundColor:thermostat.energyChecker()});

    $("#temperature-up").click(function() {
        thermostat.increaseTemperature();
        $("#temperature").text(thermostat.temperature);
        $("#right").css({backgroundColor:thermostat.energyChecker()});
        saveWeather();
    });
    $("#temperature-down").click(function() {
        thermostat.decreaseTemperature();
        $("#temperature").text(thermostat.temperature);
        $("#right").css({backgroundColor:thermostat.energyChecker()});
        saveWeather();

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
      saveWeather();

    });

    $("#power-save-off").click(function() {
      thermostat.powerSaveOff();
      $('#power-save-on').toggleClass("active");
      $(this).toggleClass("active");
      $('#power-save-message').text(thermostat.isPowerSaveOn());
      saveWeather();

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
