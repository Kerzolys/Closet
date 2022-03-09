//Задание 6.2 n1

let arr = [1, 23, 0, false, 2, 54, 13, ''];

let sumOfEvenNums = 0;
let sumOfOddNums = 0;
let nullItem = 0;



for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' && arr[i] != 0 && !isNaN(arr[i])) {
        let nums = arr[i] % 2 === 0 ? sumOfEvenNums++ : sumOfOddNums++;
    } else if (arr[i] === 0) {
        nullItem++;
    }
}

function revealValue() {
    console.log('sum of even numbers is ' + sumOfEvenNums);
    console.log('sum of odd numbers is ' + sumOfOddNums);
    console.log('there is a null in the array: ' + nullItem);
}

// revealValue();

//Задание 6.4 n2

let num;

function checkValue(num) {
    let isPrimeNum = true;

    do {
        num = +prompt('Enter a number, please');
        if (typeof num === 'number' && !isNaN(num)) {
            if (num >= 2) {
                if (num === 2 || num === 3) {
                    isPrimeNum = true;
                } else if (num % 2 == 0) {
                    isPrimeNum = false;
                } else {
                    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
                        if (num % i == 0) {
                            isPrimeNum = false;
                            break;
                        }
                    }
                }
            } else {
                isPrimeNum = false;
            }
            isPrimeNum = isPrimeNum === true ? alert('the number is prime') : alert('the number is not prime')
        } else {
            alert('the entered value is NaN')
        }
    } while (num < 1000)
    alert('the value is wrong');
}

// checkValue(num);

//Заданиие 6.6 n3

function testFunc(a) {
    return function(b) {
        return a + b;
    }
}

let sum = testFunc(3)(4);
// console.log(sum)

//or 

let sum2 = testFunc(3);
// console.log(sum2(5));

//or

let sum3 = testFunc(6);
let result = sum3(8);
// console.log(result)

//Задание 6.7 n4

function printNums(a, b) {
    let currentNum = a;

    let timerId = setInterval(function() {
        if (currentNum > b) {
            setTimeout(timerId);
        } else {
            // currentNum++;
            console.log(currentNum++)
        }

    }, 1000);
}

// printNums(3, 10);

//Задание 6.8 n 5

let multiply = (x, n) => console.log(x ** n);

// multiply(7, 2);