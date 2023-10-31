// 1. Regular expression to check if value is empty or a white space: https://www.freecodecamp.org/news/how-to-include-empty-string-in-regex/

// The test() method of RegExp instances executes a search with this regular expression for a match between a regular expression and a specified string.

function isEmpty(value){
    var regex = new RegExp(/^(?=\s*$)/g);
    return (!value || regex.test(value));
};

// 2. Example regular expression: isEmail
// Reference: https://www.educative.io/courses/testing-react-apps-jest-react-testing-library/writing-our-first-tests-with-jest

function isEmail(value){
    const regex = new RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/);
    return regex.test(value);
}

// 2. Custom function to test for radio buttons: isSeating

function isSeating(generalSeating, reservedSeating){
    return (generalSeating === false && reservedSeating === false);
}

module.exports = {isEmpty, isEmail, isSeating};

// Further reading: 
// 1. Puppeteer library: https://jestjs.io/docs/puppeteer
// 2. Regular expression generator: https://saasbase.dev/tools/regex-generator
// 3. NTU examples: https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
// 4. https://jestjs.io/docs/asynchronous
// 4.1. Asynchronous functions: https://jestjs.io/docs/tutorial-async
