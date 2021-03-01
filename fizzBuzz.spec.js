const fizzBuzz = require('./fizzBuzz.js');

test('if n = 15 expects listOfIntegers to be equal to ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', () => {
    const result = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
    expect(fizzBuzz(15)).toEqual(result);
});

test('if n = 15 expects listOfIntegers to be equal to ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', () => {
    const result = ["1", "2", "Fizz"];
    expect(fizzBuzz(3)).toEqual(result);
});