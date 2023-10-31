// to start, install jest framework: npm install --save-dev jest
const {isEmpty, isEmail, isSeating} = require('../forms/src/validation.js');

test('Should return true when empty', () => {
    expect(isEmpty("")).toBeTruthy();
});

test('Should return true when valid email', () => {
    const result = isEmail("martin@gmail.com");
    expect(result).toBe(true);
});

test('Should return true if NO seating is selected', () => {
    const result = isSeating(false, false);
    expect(result).toBe(true);
});