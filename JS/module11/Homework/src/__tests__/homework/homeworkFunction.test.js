import { repeatWord } from '../../homework/homeworkFunction.js'

describe('test for repeatitng word', () => {
    it('word appear correctly', () => {
            const positiveCount = 5;
            expect(repeatWord('hi', positiveCount)).toBe(`hi1 hi2 hi3 hi4 hi5 `);
        }),
        it('word doesn`t appear', () => {
            const negativeCount = -2;
            expect(repeatWord('hi', negativeCount)).toBe(`hi-1 hi-2 `);
        }),
        it('count is not a number', () => {
            const NaN = 'NaN';
            expect(repeatWord('hi', NaN)).toBe(`hiNaN hiNaN `);
        }),
        it('corner case?', () => {
            const minCount = 1;
            expect(repeatWord('', minCount)).toBe(`1 `);
        })
})