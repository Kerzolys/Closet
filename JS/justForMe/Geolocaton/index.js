//GEOLOCATION

const geoButton = document.querySelector('.js-button');
const statusField = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

// Функция, выводящая текст об ошибке

const error = () => {
    statusField.textContent = 'Its impossible to get your geo';
}

// Функция, срабатывающая при успешном получении геолокации

const success = (position) => {
    console.log('position', position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    statusField.textContent = `Широта: ${latitude}°, долгота: ${longitude}°`;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Ссылка на карту';
}

geoButton.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';

    if (!navigator.geolocation) {
        statusField.textContent = 'Геолокация не поддерживается браузером';

    } else {
        statusField.textContent = 'Определение геолокации...';
        navigator.geolocation.getCurrentPosition(success, error)
    }
});

///


function pageLoaded() {
    const geoButton2 = document.querySelector('.js-button__geo');
    const output = document.querySelector('.output');

    geoButton2.addEventListener('click', getLocation)

    function getLocation() {
        if ('geolocation' in navigator) {
            writeStatus('Geo is in process...')
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError)

        } else {
            writeStatus('Geo is not supported by your browser');

        }
    }

    function locationSuccess(data) {
        let link = `https://yandex.ru/maps/?ll=${data.coords.latitude},${data.coords.longitude}&z=12&l=map`

        writeStatus(`<a href="${link}" target="_blank">You are here</a>`)
        console.log(data);
    }

    function locationError() {
        writeStatus('It is impossible to get your geo');
    }

    function writeStatus(message) {
        output.innerHTML = `<p>${message}</p>`;
    }

}

document.addEventListener('DOMContentLoaded', pageLoaded)