const square = document.querySelector('.square')

// // square.ondragstart = () => false;

// const getCoords = (elem) => {
//     const box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     }
// }

// square.addEventListener('mousedown', (e) => {
//     const coords = getCoords(square);
//     const YShift = e.pageY - coords.top;
//     console.log('YShift', YShift);
//     const XShift = e.pageX - coords.left;
//     console.log('XShift', XShift);

//     const moveAt = (e) => {
//         square.style.left = e.pageX - XShift + 'px'
//         square.style.top = e.pageY - YShift + 'px'
//     }

//     const theEnd = () => {
//         document.removeEventListener('mousemove', moveAt);
//         document.removeEventListener('mouseup', theEnd)
//     }

//     moveAt(e);
//     // square.style.zIndex = '1000';

//     document.addEventListener('mousemove', moveAt)
//     document.addEventListener('mouseup', theEnd)

// })

// console.log(getCoords(square));

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


//CANVAS

// const canvas = document.querySelector('#canvas');
// console.log(canvas);
// const ctx = canvas.getContext('2d');
// // реализация квадрата в canvas
// // отступаем 10 единиц слева и 20 единиц сверху.
// // фигура будет иметь 30 ед по оси x и 40 по оси y

// ctx.fillStyle = 'rgba(100,324,534,0.4)';
// ctx.fillRect(0, 0, 300, 300)

// ctx.strokeStyle = 'blue';
// ctx.strokeRect(10, 20, 30, 40);
// // ctx.strokeStyle = 'yellow';

// ctx.fillStyle = 'green';
// ctx.fillRect(70, 10, 50, 50);

// ctx.beginPath(); // создаем контур
// ctx.moveTo(175, 150); //перемещаем перо в точку координат x и y
// ctx.lineTo(200, 175); //рисуем линию от текущей позиции до позиции новых координат
// ctx.lineTo(200, 125);
// ctx.fillStyle = 'red';
// ctx.fill()

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


function notifyMe() {
    //Проверяем NotificationAPI у браузера
    if (!('Notification' in window)) {
        console.log('Notification API is not supported');

        //Если NotificationAPI и разрешение на отправку есть,
        //то отправляем уведомление
    } else if (Notification.permission === 'granted') {
        new Notification('hello')

        //Если NotificationAPI есть, но разрешения на отправку и нет
        //запрета,то можно запросить разрешение

    } else if (Notification.permission === 'denied') {
        Notification.requestPermission()
            .then(function(permission) {
                if (permission === 'granted') {
                    new Notification('hi there')
                }
            })
    }
}

notifyMe()


window.addEventListener('load', notifyMe)