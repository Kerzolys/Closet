import { reverse } from "../reverseString.js";

xdescribe('test for reverse string', () => {
    const reverseString = 'eparg';

    it('should create an array of sub strings', () => {
        expect(reverse('grape')).toBe(reverseString)
    })
})