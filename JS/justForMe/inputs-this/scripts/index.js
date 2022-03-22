function pageLoaded() {
    const inputWidth = document.querySelector('.js-input_width');
    const inputHeight = document.querySelector('.js-input_height');
    const button = document.querySelector('.js-button_get');
    const output = document.querySelector('.js-output');
    const errorWidth = document.querySelector('.js-error_width');
    const errorHeight = document.querySelector('.js-error_height');


    button.addEventListener('click', getValues);

    function getValues() {
        checkValue(inputWidth, errorWidth);
        checkValue(inputHeight, errorHeight);
    }

    function writeOutput(value) {
        let textValue = `<div>${value}</div>`
        output.innerHTML += textValue;
    }

    function checkValue(input, errorField) {
        if ((!input.value) || isNaN(input.value) || +input.value === 0 || +input.value > 11) {
            errorField.innerHTML = 'please enter a number';
            input.value = '';
        } else {
            writeOutput(input.value)
            errorField.innerHTML = '';
            input.value = '';
        }
    }
}



window.addEventListener('load', pageLoaded)