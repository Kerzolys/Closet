let images = [{
    src: './asset/001.jpeg',
    title: 'Image 01'
}, {
    src: './asset/002.jpg',
    title: 'Image 02'
}, {
    src: './asset/003.jpg',
    title: 'Image 03'
}];

function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
        titles: false,
        dots: true,
        autoplay: false
    }

    let sliderImages = document.querySelector('.slider__images');
    let sliderArrows = document.querySelector('.slider__arrows');
    let sliderDots = document.querySelector('.slider__dots');


    // initImages - разберем массив с изображениями, создадим
    //элементы и запишем их в <div.slider__images>
    initImages();
    // initArrows - повесим обработчики событий на стрелочки
    initArrows();
    if (options.dots) {
        initDots();
    }

    if (options.titles) {
        initTitles();
    }

    if (options.autoplay) {
        initAutoplay();
    }

    function initImages() {
        //из каждого эл-та этого массива мы сделаем div
        images.forEach((image, index) => {
            let imageDiv = `<div 
            class='image n${index} ${index === 0? 'active' : ''}' 
            style='background-image:url(${images[index].src});'
            data-index='${index}'>
            </div>`
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initArrows() {
        sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber)
            });
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        if (options.dots) {
            sliderDots.querySelector('.active').classList.remove('active');
            sliderDots.querySelector('.n' + num).classList.add('active');
        }
        if (options.titles) changeTitle(num)
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class='slider__dots-item
            n${index} ${index === 0? 'active':''}'
            data-index='${index}'>
            </div>
            `
            sliderDots.innerHTML += dot;
        })
        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initTitles() {
        let titleDiv = `<div 
        class="slider__images-title">
        ${images[0].title}</div>
        `
        sliderImages.innerHTML += cropTitle(titleDiv, 60);
    }

    function changeTitle(num) {
        if (!images[num].title) return;
        let sliderTitle = sliderImages.querySelector('.slider__images-title');
        sliderTitle.innerText = cropTitle(images[num].title, 60);
    }

    function cropTitle(title, size) {
        if (title.length <= size) {
            return title;
        } else {
            return title.substr(0, size) + '...';
        }
    }

    function initAutoplay() {
        setInterval(() => {
            let curNumber = +sliderImages.querySelector('.active').dataset.index;
            let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;;
            moveSlider(nextNumber)
        }, options.autoplayInterval);
    }
}

let sliderOptions = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 3000
}

window.addEventListener('load', console.log('ok'))
document.addEventListener('DOMContentLoaded', function() {
    initSlider(sliderOptions)
})