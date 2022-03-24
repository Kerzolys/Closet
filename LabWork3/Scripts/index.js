let images = [{
        src: './asset/image1.png',
        title: 'Rostov-on-Don. Admiral'
    },
    {
        src: './asset/image2.png',
        title: 'Sochi. Thieves'
    },
    {
        src: './asset/image3.png',
        title: 'Rostov-on-Don. Patriotic'
    }
]

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector('.js-slider_images');
    let sliderArrows = document.querySelector('.js-arrows');
    let sliderDots = document.querySelector('.js-dots');
    let sliderTitles = document.querySelector('.js-titles')

    console.log(sliderTitles);

    //разберем массив с изображениями, создадим элементы
    //и запишем их в <div js-slider_images>
    initImages();
    // повесим обработчики событий на стрелочки
    initArrows();

    initDots();

    changeTitles();

    initAutoplay();

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
        sliderTitles.querySelectorAll('.title').forEach((title, index) => {
            console.log(title);
            title.classList.add(`n${index}`)
            title.dataset.index = `${index}`
            title.addEventListener('click', function() {
                moveSlider(this.dataset.index)
            })
        })
    }

    function initAutoplay() {
        setInterval(() => {
            let curNumber = +sliderImages.querySelector('.active').dataset.index;
            let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
            moveSlider(nextNumber)
        }, 4000)
    }
}


window.addEventListener('DOMContentLoaded', initSlider)