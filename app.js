var inputValue = document.querySelector(".inputValue");
var button = document.querySelector(".button");
var city = document.querySelector(".city");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var humi = document.querySelector(".humi");

button.addEventListener("click", function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=a68f729b2562c32b1490eda8ff76f82e")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        var nameValue ="City: " + data["name"];
        var tempValue ="Temp: " + data["main"]["temp"] + "°F";
        var HumidityValue ="Humidity: " + data["main"]["humidity"];
        var descValue ="Description: " + data["weather"][0]["description"];

        city.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        humi.innerHTML = HumidityValue;
        
    })
    .catch(error => alert("City not found!"))

    inputValue.value = "";
})