const apiKey = 'fc22065d3567552db86ae1a1ac5b2976'; // Replace with your Apixu/Weatherstack API key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const currentWeather = document.getElementById('currentWeather');
const fiveDayForecast = document.getElementById('fiveDayForecast');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeatherData(city);
  }
});

async function fetchWeatherData(city) {
  const currentUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  const forecastUrl = `http://api.weatherstack.com/forecast?access_key=${apiKey}&query=${city}&forecast_days=5`;

  try {
    // Fetch current weather
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();
    displayCurrentWeather(currentData);

    // Fetch 5-day forecast
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    displayFiveDayForecast(forecastData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayCurrentWeather(data) {
  const { location, current } = data;
  currentWeather.innerHTML = `
    <div class="weather-card">
      <h3>${location.name}, ${location.country}</h3>
      <p>Son Güncelleme: ${current.observation_time}</p>
      <img src="${current.weather_icons[0]}" alt="${current.weather_descriptions[0]}">
      <p>${current.temperature}°C</p>
      <p>${current.weather_descriptions[0]}</p>
      <p>Rüzgar: ${current.wind_speed} km/h</p>
      <p>Yağış: ${current.precip} mm</p>
      <p>Basınç: ${current.pressure} mb</p>
    </div>
  `;
}

function displayFiveDayForecast(data) {
  const { forecast } = data;
  fiveDayForecast.innerHTML = '';

  for (const day in forecast) {
    const dayData = forecast[day];
    fiveDayForecast.innerHTML += `
      <div class="weather-card">
        <h3>${dayData.date}</h3>
        <img src="${dayData.day.weather_icons[0]}" alt="${dayData.day.weather_descriptions[0]}">
        <p>Avg Temp: ${dayData.day.avgtemp_c}°C</p>
      </div>
    `;
  }
}