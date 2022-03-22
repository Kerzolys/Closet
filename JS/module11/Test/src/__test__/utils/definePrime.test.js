import { definePrime } from "../../utils/definePrime.js";

xdescribe('tests for definePrime function', () => {
    const simple = 17;
    const complex = 18;

    // тестируем, когда функция работает с числом и оно простое
    it('should operate correctly with simple number', () => {
            expect(definePrime(simple)).toBe(`Number ${simple} - is prime`)
        }),
        // когда функция работет с числом и оно составное
        it('should operate correctly with complex number', () => {
            expect(definePrime(complex)).toBe(`Number ${complex} - is not prime`)
        }),
        // проверка данных на валидность
        it('should operate correctly with invalid value', () => {
            expect(definePrime(0)).toBe('The value is not correct')
        })
})

// вместо трех it - один. это использовать, когда много тестов или утилит.

xdescribe('tests for definePrime function', () => {
    const simple = 17;
    const complex = 18;

    it('should operate correctly with simple, complex and invalid number', () => {
        expect(definePrime(simple)).toBe(`Number ${simple} - is prime`)
        expect(definePrime(complex)).toBe(`Number ${complex} - is not prime`)
        expect(definePrime(0)).toBe('The value is not correct')

    })
})