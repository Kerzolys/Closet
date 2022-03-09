const nodes = document.body.childNodes;
const children = document.body.children;

// console.log(nodes)

for (let child of children) {
    // console.log(child.parentNode);
}
// console.log(children)

const firstElCh = document.body.lastElementChild;

// console.log(firstElCh);

// const text = document.querySelector('p');
// // console.log(text);

// const textContent = text.innerHTML;

// text.innerHTML = `<p>${textContent}</p><p>FUCK <span class="red">YOU</span>!`
//     // console.log(text.innerHTML);

// const newText = document.createElement('div');

// newText.innerHTML = `<span id="custom"> Who are you?</span`;
// const parent = document.querySelector('p')

// newText.classList.add('red');

// // for (let className of newText.classList) {
// //     console.log(className);
// // }
// newText.style.color = 'red';

// document.body.insertBefore(newText, parent)

// console.log(newText.innerHTML);
// console.log(parent);

// parent.insertAdjacentHTML('afterbegin', `<span id="custom"> Who are you?</span`)

// const anotherText = document.createElement('div');
// anotherText.innerHTML = `<span class="simple"> Yeah! it should work!</span>`;

// anotherText.classList.add('blue')
// for (let className of anotherText.classList) {
//     console.log(className)
// }

// document.body.insertBefore(anotherText, parent)

// anotherText.style.cssText = `
//     color: blue;
//     margin-left: 10px;
//     font-size: 20px;
// `
const parent = document.querySelector('p')
console.log(parent.innerHTML)
const button = document.createElement('button');
button.innerHTML = 'press me';

button.style.cssText = `
    margin-top: 20px;
    background-color: white;
    color: black;
    width: 60px;
    height: 35px;
    border: 0.5, solid, black;
`
document.body.insertBefore(button, parent);

button.classList.add('madeButton');
// console.log(button.className);

button.addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.innerHTML = 'press me';
    newButton.style.cssText = `
    margin-top: 20px;
    background-color: white;
    color: black;
    width: 60px;
    height: 35px;
    border: 0.5, solid, black;
`
    document.body.insertBefore(newButton, parent);
    // newButton.addEventListener('click', function() {
    //     document.body.removeChild(newButton)
    // })
})

function clickMe() {
    let buttonChanged = document.getElementById('btn');
    buttonChanged.style.backgroundColor = 'blue';
}

btn.addEventListener('click', clickMe)

btn.addEventListener('click', function() {
    const paragraph = document.getElementsByTagName('p');
    parent.insertAdjacentHTML('beforeend', ` and FUCK YOU`)
})

// const paragraph = document.getElementsByTagName('p');
// const paragraphContent = paragraph.innerHTML;
// // paragraphContent.innerHTML = `<p>${paragraph} and FUCK YOU</p>`;
// parent.insertAdjacentHTML('beforeend', ` and FUCK YOU`)