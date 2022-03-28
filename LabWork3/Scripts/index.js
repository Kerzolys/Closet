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

    initInfo(images[0].infoCity, sliderInfoCity);
    initInfo(images[0].infoArea, sliderInfoArea);
    initInfo(images[0].infoTime, sliderInfoTime);
    initInfo(images[0].infoCost, sliderInfoCost);

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
        changeInfo(num, images[num].infoCity, sliderInfoCity);
        changeInfo(num, images[num].infoArea, sliderInfoArea);
        changeInfo(num, images[num].infoTime, sliderInfoTime);
        changeInfo(num, images[num].infoCost, sliderInfoCost);

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

    function initInfo(param, sliderInfoArea) {
        let infoSpan = `
        <span>${param}
        </span>`

        sliderInfoArea.innerHTML = infoSpan;
    }

    function changeInfo(num, param, sliderInfoArea) {
        if (!param) return;
        sliderInfoArea.innerHTML = param;
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