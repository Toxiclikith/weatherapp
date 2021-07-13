let weather = {
    "apiKey": "33bfcb70b603b000a6226eb854d07f5f",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city
          + "&units=metic&appid="
          + this.apiKey
          )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity is: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed is: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
this.fetchWeather(document.querySelector(".searchBar").value)
    }
};
document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
});
document.querySelector(".searchBar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search();
    }
});