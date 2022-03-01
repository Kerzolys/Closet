//Задание 9.2 No.1
const parser = new DOMParser();

const xmlDoc = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDOM = parser.parseFromString(xmlDoc, 'text/xml')
    // console.log(xmlDOM);

const listNode = xmlDOM.querySelector('list');
const studentsNode = listNode.querySelectorAll('student');
const namesNode = listNode.querySelectorAll('name');
const firstNamesNode = listNode.querySelectorAll('first');
const secondNamesNode = listNode.querySelectorAll('second');
const agesNode = listNode.querySelectorAll('age');
const profsNode = listNode.querySelectorAll('prof');

//столкнулся с проблемой вывода массива аттрибутов

const result = {
    list: [{
            name: firstNamesNode[0].textContent + secondNamesNode[0].textContent,
            age: Number(agesNode[0].textContent),
            prof: profsNode[0].textContent,
            lang: namesNode[0].getAttribute('lang')
        },
        {
            name: firstNamesNode[1].textContent + secondNamesNode[1].textContent,
            age: Number(agesNode[1].textContent),
            prof: profsNode[1].textContent,
            lang: namesNode[1].getAttribute('lang')

        }
    ]
}

// console.log(result);

//Задание 9.2 No.2

const JSONString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
   `
    // console.log(JSONString);

const data = JSON.parse(JSONString);
// console.log(data);
const list = data.list;


const result2 = {
    list: [
        { name: list[0].name, age: Number(list[0].age), prof: list[0].prof },
        { name: list[1].name, age: Number(list[1].age), prof: list[1].prof },

    ]
}

// console.log(result2);

//Задание 9.3 No.3

const input = document.querySelector('.input-area_input');
const submitBtn = document.querySelector('.input-area_input__submit');
const errorField = document.querySelector('.input-area_input__error');
const resultNode = document.querySelector('.blockCard');
// const label = document.querySelector('label')

let addr = new URL('https://picsum.photos/v2/list?limit=5');

function getParam() {
    const params = addr.search.substring(1);
    const arrOfParams = params.split('&');

    let paramKey = '';

    for (let i = 0; i < arrOfParams.length; i++) {
        const param = arrOfParams[i].split('=');

        param[1] = input.value;
        // console.log(param[1]);
        paramKey += param[1];

    }

    if (paramKey < 10 && paramKey > 1) {
        let search_param = addr.searchParams;
        search_param.set('limit', input.value);
        addr.search = search_param.toString();

        let new_addr = addr.toString();
        return new_addr;
    } else {
        return false;
    }
}

const useRequest = (url, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('response status is ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }

    xhr.onprogress = function() {
        console.log(`loaded ${xhr.loaded} of ${xhr.total}`);
    }

    xhr.onerror = function() {
        console.log('error! response status is ', xhr.status);
    }

    xhr.send()
}

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image"/>
                <p>${item.author}</p>
            </div>   
        `;

        cards += cardBlock;

    })
    resultNode.innerHTML = cards;


}

const checkValue = (value, element, element2) => {
    if (typeof value !== 'number' && isNaN(value)) {
        console.log('please, enter a number');
        element.innerHTML = 'please, enter a number';
        element2.innerHTML = '';

    } else if (value > 9 || value < 2) {
        console.log('please, enter a number between 1 and 10');
        element.innerHTML = 'please, enter a number between 1 and 10';
        element2.innerHTML = '';


    } else if (value = '') {
        element.innerHTML = 'please, enter a number';
        element2.innerHTML = '';


    } else {
        console.log('its okay');
        element.innerHTML = '';

    }
}

submitBtn.addEventListener('click', function() {
    console.log(input.value);
    checkValue(input.value, errorField, resultNode);
    useRequest(getParam(), displayResult);
})

input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        // console.log(input.value);
        checkValue(input.value, errorField, resultNode);
        useRequest(getParam(), displayResult);

    }
})

//Задание 9.6 No.4

const widthInput = document.querySelector('.width-input');
const heightInput = document.querySelector('.height-input');
const inputs = document.querySelectorAll('input.width-input, input.height-input');

const widthErrorField = document.querySelector('.width-input_error');
const heightErrorField = document.querySelector('.height-input_error');

const submitMeasuresBtn = document.querySelector('.input-area_button');
const imagesBlock = document.querySelector('.imageBlock');
const imageCard = document.querySelector('.imageBlock_image')

function checkMeasuresValue(value, el) {
    if (isNaN(value.value) || value.value < 100 || value.value > 300 || +value.value === 0) {
        el.innerHTML = 'Please enter a number between 100 and 300';
    } else {
        el.innerHTML = '';
    }
}

function getMeasuresParams() {
    let address = new URL('https://picsum.photos');

    let widthValue = widthInput.value;
    let heightValue = heightInput.value;

    let widthParam = widthValue;
    let heightParam = heightValue;

    if ((!(widthParam < 301 && heightParam < 301) || !(widthParam > 99 && heightParam > 99))) {
        return false;
    } else {
        address.pathname = `${widthParam}/${heightParam}`
        return address;
    }
}

function useMeasureRequest(url) {
    fetch(url)
        .then((response) => { return response.url })
        .then((image) => {
            displayImageResult(image)
        })
        .catch(error => console.log(error))
}

function displayImageResult(apiData) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(apiData, 'text/html');

    let img = new Image();
    img.src = doc.body.innerText;
    imageCard.src = img.src;
}

submitMeasuresBtn.addEventListener('click', function() {
    checkMeasuresValue(widthInput, widthErrorField);
    checkMeasuresValue(heightInput, heightErrorField);
    useMeasureRequest(getMeasuresParams())
});

inputs.forEach(input => {
    input.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            checkMeasuresValue(widthInput, widthErrorField);
            checkMeasuresValue(heightInput, heightErrorField);
            useMeasureRequest(getMeasuresParams())
        }
    })
})



// Задание 9.7 No.5

const inputs3 = document.querySelectorAll('input.page-input, input.limit-input');
const pageInput = document.querySelector('input.page-input');
const limitInput = document.querySelector('input.limit-input');

const errorPageField = document.querySelector('.page-input_error');
const errorLimitField = document.querySelector('.limit-input_error');
const errorGlobalField = document.querySelector('.global-input_error');
const errorFields3 = document.querySelectorAll('.page-input_error, .limit-input_error')

const labels3 = document.querySelectorAll('.page-input_label, .limit-input_label');
const button3 = document.querySelector('.get-request');
const imageBlock3 = document.querySelector('.lastCardBlock');
const image = document.querySelector('.lastCardBlock_image')

const url = new URL('https://picsum.photos/v2/list?');

function checkValue3(value, error, param, result) {
    if (isNaN(value.value) || +value.value === 0 || value.value > 10 || value.value === '') {
        error.innerHTML = `The number of ${param} is outside the range from 1 to 10`;
        result.innerHTML = '';
    } else {
        error.innerHTML = '';
    }
}

function checkBothValues() {
    let pageValue = pageInput.value;
    let limitValue = limitInput.value;
    // if ((isNaN(pageValue) && isNaN(limitValue)) || (pageValue > 10 && limitValue > 10) || (+pageValue === 0 && +limitValue === 0) || (pageValue === '' && limitValue === '')) {
    if ((!(pageValue < 11 || limitValue < 11)) || (+pageValue === 0 || +limitValue === 0)) {
        errorPageField.innerHTML = '';
        errorLimitField.innerHTML = '';
        errorGlobalField.innerHTML = 'The number of page and limit is outside the range from 1 to 10';
    } else {
        errorGlobalField.innerHTML = '';
    }
}

function setParams() {
    let searchParams = url.searchParams;
    if (!(pageInput.value < 11 && limitInput.value < 11) || (+pageInput.value === 0 || +limitInput.value === 0)) {
        return false;
        // } else if (+pageInput.value === 0 || +limitInput.value === 0) {
        //     return false;

    } else {
        searchParams.set('page', pageInput.value);
        searchParams.set('limit', limitInput.value);
        url.search = searchParams.toString();

        let newUrl = url.toString()
        localStorage.setItem('page', pageInput.value)
        localStorage.setItem('limit', limitInput.value)

        return newUrl;

    }

}

function useRequest3(url) {
    fetch(url)
        .then(response => response.json())
        // .then(images => console.log(images))
        .then(images => displayResult3(images))
        .catch(err => console.log(err))
}

function displayResult3(apiData) {
    let cards = '';

    apiData.forEach(item => {
        let cardBlock = `
                <div class = "card">
                    <img src = "${item.download_url}" 
                    class= "card-image"/>
                    <p>${item.author}</p> 
                </div>
                `
        cards += cardBlock;
    })

    imageBlock3.innerHTML = cards;
}

inputs3.forEach(input => {
    input.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            checkValue3(pageInput, errorPageField, 'page', imageBlock3);
            checkValue3(limitInput, errorLimitField, 'limit', imageBlock3);
            checkBothValues();

            useRequest3(setParams())

        }
    })
})

button3.addEventListener('click', function() {
    checkValue3(pageInput, errorPageField, 'page', imageBlock3);
    checkValue3(limitInput, errorLimitField, 'limit', imageBlock3);
    checkBothValues();

    useRequest3(setParams())


})

window.addEventListener('load', () => {
    if (localStorage.length !== 0) {
        pageInput.value = localStorage.page;
        limitInput.value = localStorage.limit;
    }
    useRequest3(setParams())
})