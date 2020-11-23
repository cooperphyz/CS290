let genrequest = function(url) { // &appid=c640c6cc83953b311bd57ebd01bc9e85
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    console.log(JSON.parse(req.responseText));
    reportWeatherResults(req)
  }
    function myFunction() {                   // artifact code, unused right now
      var x = document.getElementById("myForm").action;
      document.getElementById("demo").innerHTML = x;
  }
  
  let reportWeatherResults = function(req){   //Report weather results to the page
      document.getElementById("Status").textContent = (JSON.parse(req.responseText).weather[0].main)
      temp = JSON.parse(req.responseText).main.temp
      temp = ((temp-273.15)*1.8)+32
      document.getElementById("Temp").textContent = temp + "F"
      document.getElementById("Humidity").textContent = (JSON.parse(req.responseText).main.humidity)
      document.getElementById("Wind").textContent = (JSON.parse(req.responseText).wind.speed + "kph")
  }
  
  var formOne = document.getElementById("formOne");  // prevent forms from refreshing page on submit
  function handleForm(event) { event.preventDefault(); }
  formOne.addEventListener('submit', handleForm);

  var formTwo = document.getElementById("formTwo");  // prevent forms from refreshing page on submit
  function handleForm(event) { event.preventDefault(); }
  formOne.addEventListener('submit', handleForm);
  
  var setValuesOne = function() {                       // get values from first weather form
      var cityName = document.getElementById("cityname").value;
      document.getElementById("CityInput").textContent=cityName
      var countryCode = document.getElementById("countrycode").value;
      document.getElementById("CountryInput").textContent=countryCode
      genurlone(cityName, countryCode)
  }
  var setValuesTwo = function() {                       // get values from first weather form
    var cityName = document.getElementById("cityname2").value;
    document.getElementById("CityInput2").textContent=cityName
    var countryCode = document.getElementById("countrycode2").value;
    document.getElementById("CountryInput2").textContent=countryCode
    genurlone(cityName, countryCode)
}
  
  var genurlone = function(cityName, countryCode) {   // send data to get weather request from forms
      returnurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ',' + countryCode + "&appid=c640c6cc83953b311bd57ebd01bc9e85";
      genrequest(returnurl)
  }
  