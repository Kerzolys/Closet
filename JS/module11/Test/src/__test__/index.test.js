// const mult = require('./index.js');

// test('mult 1 * 0 to equal 1', () => {
//     const result = mult(a = 1, b = 0)
//     expect(result).toBe(0);
// });

// const { describe } = require('yargs');
// const mult = require('./index.js');

// describe('multiply test', () => {
//     it('mult 1 * 0 to equal 0', () => {
//             const result = mult(1, 0);
//             expect(result).toBe(0);
//         }),
//         it('mult 1 * 1 to equal 1', () => {
//             const result = mult(1, 1);
//             expect(result).toBe(1)
//         });
// });

// describe('multiply test 2', () => {
//     it('mult 1 * 3 to equal 3', () => {
//             const result = mult(1, 3);
//             expect(result).toBe(3);
//         }),
//         xit('mult 12 * 1 to equal 12', () => {
//             const result = mult(12, 1);
//             expect(result).toBe(12)
//         });
// });

// x - возможность отключения тестов

import { mult } from '../index.js';

xdescribe('multiply test', () => {
    it('mult 1 * 0 to equal 0', () => {
            const result = mult(1, 0);
            expect(result).toBe(0);
        }),
        it('mult 1 * 1 to equal 1', () => {
            const result = mult(1, 1);
            expect(result).toBe(1)
        });
});