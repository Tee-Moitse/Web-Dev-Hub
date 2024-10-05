const apiKey = "2ff11c284182366f271da03305052f15";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  if (data.cod === "404") {
    weatherInfo.innerHTML = "<p>City not found</p>";
    weatherInfo.style.display = "block";
    return;
  }

  const { name, main, weather, wind, sys } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  weatherInfo.innerHTML = `
        <h2>${name}, ${sys.country}</h2>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${
          description.charAt(0).toUpperCase() + description.slice(1)
        }</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
  weatherInfo.style.display = "block"; // Show the weather info
}
