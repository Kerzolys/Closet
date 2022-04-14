import './scss/index.scss'

const divContainer = document.querySelector('.container');
divContainer.innerHTML += 'FUCK YOU I GET YOU'
divContainer.style.cssText = `
    font-weight: bold;
    font-size: 50px
`

window.addEventListener('loaded', console.log('fuck'))