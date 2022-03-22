// Пример API запроса: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}&units=metric&lang=ru
// Иконка: http://openweathermap.org/img/wn/${icon}.png

const button = document.querySelector('.js-button');
const output = document.querySelector('.js-output');
const apiURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "59aaed6f10d8ae0565183dd571a3b596";

function getWeather() {

    button.addEventListener('click', getGeo)

    function getGeo() {
        if ('geolocation' in navigator) {
            writeOutput('Geolocation is in progress...')
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError)
        } else {
            writeOutput('Geolocation is not supported!')
        }
    }

    function writeOutput(message) {
        output.innerHTML = `<p>${message}</p>`
    }

    function locationSuccess(position) {
        let coords = [position.coords.latitude, position.coords.longitude];
        let url = formatUrl(coords);
        fetch(url)
            .then(response => { return response.json() })
            .then(data => {
                let outputText = formatOutput(data);
                setTimeout(writeOutput(outputText), 1000)

            })
    }

    function locationError() {
        writeOutput('Is it impossible to get geolocation')
    }

    function formatUrl(coords) {
        let url = new URL(apiURL);
        url.searchParams.set('lat', coords[0]);
        url.searchParams.set('lon', coords[1]);
        url.searchParams.set('appid', apiKey);
        url.searchParams.set('units', 'metric');
        url.searchParams.set('lang', 'eng');
        return url;
    }

    function formatOutput(data) {
        console.log(data);
        let html = `
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" 
            alt="${data.weather[0].description}"/>
            <p>City: ${data.name}</p>
            <p>City: ${data.weather[0].description}</p>
            <p>Temperature: ${Math.floor(data.main.temp)}&deg;C</p>
        `
        return html;
    }
}

window.addEventListener('load', getWeather);