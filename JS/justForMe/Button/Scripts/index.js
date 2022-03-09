//алгоритм
// 1. в момент клика нам необходимо срендерить div, который
// будет играть роль круга
// 2. дальше нам необходимо его анимировать (css key-frames)
// 3. когда круг расширится - мы круг удаляем



function buttonAnimation() {
    const button = document.querySelector('.button');
    const container = document.querySelector('.container')

    function deleteIcon(circle) {
        setTimeout(() => {
            circle.remove()
        }, 500)
    }

    function createCircleIcon(posX, posY) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;

        container.appendChild(circle)
        deleteIcon(circle)
    }

    function handleButtonClick(evt) {
        const offset = evt.target.getBoundingClientRect()

        const posX = evt.pageX - offset.left;
        const posY = evt.pageY - offset.top;
        console.log(posX, posY);

        createCircleIcon(posX, posY)
    }

    button.addEventListener('mousedown', handleButtonClick)
}

buttonAnimation()


window.addEventListener('load', console.log('fuck'))