import '../styles/styles.css'
document.write('hello and fuck you!');

// симуляция модульной архитектуры с помощью IIFE
(function() {
    console.log('this is a module');
})()

//объявление модуля как глобальной переменной
var es5Module = function() {
    //внутренняя логика модуля
    function sayHi() {
        console.log('Hi you');
    }
    //внешний API
    return {
        sayHi: sayHi
    };
}()

// доступ к функциональности модуля
es5Module.sayHi()

document.write('FUCK YOUUUU')