  // Array to store city weather data
  let cityWeather = [
    { cityName: 'New York', temperature: 28, condition: 'Sunny' },
    { cityName: 'London', temperature: 15, condition: 'Cloudy' },
    { cityName: 'Tokyo', temperature: 32, condition: 'Rainy' },
    { cityName: 'Paris', temperature: 22, condition: 'Sunny' }
  ];

  // Add City Weather: Function to add a new city weather object
  function addCityWeather() {
    const cityName = document.getElementById('cityName').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    const condition = document.getElementById('condition').value;

    const newCityWeather = { cityName, temperature, condition };
    cityWeather.push(newCityWeather);

    document.getElementById('result').innerHTML = `<h2>${cityName} weather added successfully!</h2>`;
  }

  // Find Hottest City: Function to identify the city with the highest temperature
  function findHottestCity() {
    const hottestCity = cityWeather.reduce((max, city) => city.temperature > max.temperature ? city : max);
    document.getElementById('result').innerHTML = `
      <h2>Hottest City:</h2>
      <p>City: ${hottestCity.cityName}, Temp: ${hottestCity.temperature}°C, Condition: ${hottestCity.condition}</p>
    `;
  }

  // Filter by Condition: Function to list all cities with a specific weather condition
  function filterByCondition() {
    const filteredCities = cityWeather.filter(city => city.condition === 'Sunny');
    let output = '<h2>Sunny Cities:</h2>';
    filteredCities.forEach(city => {
      output += `<div class="list-item">${city.cityName}: ${city.temperature}°C</div>`;
    });
    document.getElementById('result').innerHTML = output;
  }

  // Show Weather Summary: Function to list all cities with their weather details
  function logWeatherSummary() {
    let summary = '<h2>Weather Summary:</h2>';
    cityWeather.forEach(city => {
      summary += `<div class="list-item">City: ${city.cityName}, Temp: ${city.temperature}°C, Condition: ${city.condition}</div>`;
    });
    document.getElementById('result').innerHTML = summary;
  }

  // Sort Cities by Temperature: Function to sort cities by temperature
  function sortCitiesByTemperature() {
    const sortedCities = [...cityWeather].sort((a, b) => b.temperature - a.temperature);
    let sortedList = '<h2>Sorted Cities by Temperature:</h2>';
    sortedCities.forEach(city => {
      sortedList += `<div class="list-item">${city.cityName}: ${city.temperature}°C</div>`;
    });
    document.getElementById('result').innerHTML = sortedList;
  }