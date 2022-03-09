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

window.addEventListener('load', console.log('fuck'))