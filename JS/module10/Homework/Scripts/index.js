const square = document.querySelector('.square')


//Модуль 10.3, Задание 1

const button = document.querySelector('.js-button');
const icons = document.querySelectorAll('.js-icon1, .js-icon2')

const changeIcon = () => {
    icons.forEach(icon => {
        if (icon.classList.contains('hide')) {
            icon.classList.remove('hide')
        } else {
            icon.classList.add('hide')
        }
    })
}

button.addEventListener('click', changeIcon);

//Модуль 10.5, Задание 2

const sizeBtn = document.querySelector('.js-button__size');

function getWindowSize() {
    alert(`
    ширина экрана: ${window.screen.width}, 
    высота экрана: ${window.screen.height}, 
    текущая ширина экрана: ${window.innerWidth}, 
    текущая высота экрана: ${window.innerHeight}
    `);
}

sizeBtn.addEventListener('click', getWindowSize)

// Модуль 10.6, Задание 3

const outputStatus = document.querySelector('.js-output');
const chatOutput = document.querySelector('.js-chat');
const chatInput = document.querySelector('.js-input');
const sendBtn = document.querySelector('.js-send-button');
const geoBtn = document.querySelector('.js-geo-button')

// socket не работает, пишут, что сайт более недоступен
const wsUrl = "wss://echo.websocket.org/";

let socket = new WebSocket(wsUrl);

socket.onopen = () => {
    outputStatus.innerHTML = 'Connection is up'
}

socket.onerror = () => {
    outputStatus.innerHTML = 'Connection is failed'
}

socket.onmessage = (event) => {
    writeToChat(event.data, true)
}

function sendMessage() {
    if (!chatInput.value) {
        chatInput.classList.add('error');
        return;
    };
    writeToChat(chatInput.value, false);
}

function writeToChat(message, isReceived) {
    let messageHTML = `<div class="${isReceived ? 'received' : 'send'}">${message}</div>`
    chatInput.classList.remove('error');
    chatInput.value === '';
    chatOutput.innerHTML += messageHTML;
}

function getGeo() {
    if ('geolocation' in navigator) {
        writeToChat('Geolocation is in progress', true);
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    } else {
        writeToChat('Geolocation is not supported', true)
    }
}

function locationSuccess(position) {
    let mapLink = `https://www.openstreetmap.org/export#map=10/${position.coords.latitude}/${position.coords.longitude}`;

    writeToChat(`<a href="${mapLink}" target="_blank">Your geo is..</a>`, true)
}

function locationError() {
    writeToChat('Geolocation is not availible', true)
}

geoBtn.addEventListener('click', getGeo)

sendBtn.addEventListener('click', sendMessage);

window.addEventListener('load', console.log('ok'))