const apiKey = '2cb3612c2042966049e8a811c93300e6';  // Correct way to assign the API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weather-info').innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p><i class="fas fa-temperature-high"></i>Temperature: ${data.main.temp} °C</p>
                    <p><i class="fas fa-cloud"></i>Condition: ${data.weather[0].description}</p>
                    <p><i class="fas fa-wind"></i>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = `<p>Error retrieving data. Try again later.</p>`;
        });
}
