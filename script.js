const searchWeather = () => {
    let all = document.getElementsByClassName('all');
    let location = document.getElementById('location');
    let weatherType = document.getElementById('weatherType');
    let temperature = document.getElementById('temperature');
    let error = document.getElementById('error');
    let search = document.getElementById('weatherSearch').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&apikey=d1d1c71914712159c9a05d89de951e50`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.message === "city not found") {
                for (let item of all) {
                    item.style.display = 'none';
                }
                error.style.display = 'flex';
                error.textContent = ("City not found.");
            } else {
                for (let item of all) {
                    item.style.display = 'block';
                }
                location.textContent = (`Location: ${data.name}`)
                country.textContent = (`Country: ${data.sys.country}`)
                weatherType.textContent = (`Weather Type: ${data.weather[0].main}`)
                temperature.textContent = (`Temperature: ${Math.round(data.main.temp - 273)}°`)
            }
        });
}

document.getElementById('button').addEventListener('click', searchWeather);