//  Модуль 11.7, задание 2

export function repeatWord(word, count) {
    let result = '';

    for (let i = 1; i <= count; i++) {
        result += `${word}${i} `;
    }
    return result;
}