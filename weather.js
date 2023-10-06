$(document).ready(function () {
  $("#getData").click(function () {
    var loc = document.getElementById("setData").value;
    var apiKey = "635f2c947d8bd88f92cad151e970deb7"; 
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=" + apiKey;

    $.ajax({
      url: url,
      dataType: "json",
      success: function (data) {
        $("#location").html(data.name + ", " + data.sys.country);
        $("#temp").html("Temp: " + (data.main.temp - 273.15).toFixed(2) + "°C");
        $("#wind").html("Wind: " + data.wind.speed + " m/s");
        $("#humidity").html("Humidity: " + data.main.humidity + "%");
        var iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $("#icon").attr("src", iconUrl);
      },
      error: function (error) {
        console.log(error);
        alert("Error fetching weather data.");
      },
    });
  });
});
