let images = [{
        src: './asset/image1.png',
        title: 'Rostov-on-Don. Admiral',
        infoCity: 'Rostov-on-Don LCD admiral',
        infoArea: '81 m2',
        infoTime: '3.5 months',
        infoCost: 'Upon request'

    },
    {
        src: './asset/image2.png',
        title: 'Sochi. Thieves',
        infoCity: 'Sochi Thieves',
        infoArea: '105 m2',
        infoTime: '4 months',
        infoCost: 'Upon request'
    },
    {
        src: './asset/image3.png',
        title: 'Rostov-on-Don. Patriotic',
        infoCity: 'Rostov-on-Don Patriotic',
        infoArea: '93 m2',
        infoTime: '3 months',
        infoCost: 'Upon request'
    }
]

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector('.js-slider_images');
    let sliderArrows = document.querySelector('.js-arrows');
    let sliderDots = document.querySelector('.js-dots');
    let sliderTitles = document.querySelector('.js-titles')
    let sliderInfoCity = document.querySelector('.js-info-city')
    let sliderInfoArea = document.querySelector('.js-info-area')
    let sliderInfoTime = document.querySelector('.js-info-time')
    let sliderInfoCost = document.querySelector('.js-info-cost')


    //разберем массив с изображениями, создадим элементы
    //и запишем их в <div js-slider_images>
    initImages();
    // повесим обработчики событий на стрелочки
    initArrows();

    initDots();

    changeTitles();

    initInfoCity();
    initInfoArea();
    initInfoTime();
    initInfoCost();


    // changeInfo();

    // initAutoplay();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `
                <div class="image n${index} ${index === 0? 'active':''}"
                style="background-image: url(${images[index].src});"
                data-index="${index}">
                </div>            
            `
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll('.js-arrow').forEach(arrow => {
            // console.log(arrow);
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber)
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active')
        sliderDots.querySelector('.n' + num).classList.add('active');
        sliderTitles.querySelector('.active').classList.remove('active')
        sliderTitles.querySelector('.n' + num).classList.add('active');
        changeInfoCity(num);
        changeInfoArea(num);
        changeInfoTime(num);
        changeInfoCost(num);

    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider_dots-item 
            n${index} ${index === 0 ? 'active':''}"
            data-index="${index}">
            </div>
            `
            sliderDots.innerHTML += dot;
        })
        sliderDots.querySelectorAll('.slider_dots-item').forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlider(this.dataset.index)
            })
        })
    }

    function changeTitles() {
        sliderTitles.querySelectorAll('.js-title').forEach((title, index) => {
            // console.log(title);
            title.classList.add(`n${index}`);
            title.dataset.index = `${index}`;
            title.addEventListener('click', function() {
                moveSlider(this.dataset.index)
            })
        })
    }

    function initInfoCity() {
        let infoSpan = `
        <span>${images[0].infoCity}
        </span>`

        sliderInfoCity.innerHTML = infoSpan;
    }

    function changeInfoCity(num) {
        if (!images[num].infoCity) return;
        sliderInfoCity.innerHTML = images[num].infoCity;
    }

    function initInfoArea() {
        let infoSpan = `
        <span>${images[0].infoArea}
        </span>`

        sliderInfoArea.innerHTML = infoSpan;
    }

    function changeInfoArea(num) {
        if (!images[num].infoCity) return;
        sliderInfoArea.innerHTML = images[num].infoArea;
    }

    function initInfoTime() {
        let infoSpan = `
        <span>${images[0].infoTime}
        </span>`

        sliderInfoTime.innerHTML = infoSpan;
    }

    function changeInfoTime(num) {
        if (!images[num].infoTime) return;
        sliderInfoTime.innerHTML = images[num].infoTime;
    }

    function initInfoCost() {
        let infoSpan = `
        <span>${images[0].infoCost}
        </span>`

        sliderInfoCost.innerHTML = infoSpan;
    }

    function changeInfoCost(num) {
        if (!images[num].infoCost) return;
        sliderInfoCost.innerHTML = images[num].infoCost;
    }

    // function initAutoplay() {
    //     setInterval(() => {
    //         let curNumber = +sliderImages.querySelector('.active').dataset.index;
    //         let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
    //         moveSlider(nextNumber)
    //     }, 4000)
    // }
}


window.addEventListener('DOMContentLoaded', initSlider)