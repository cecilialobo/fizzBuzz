const fizzBuzz = require('./fizzBuzz.js');

test('if n = 15 expects listOfIntegers to be equal to ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', () => {
    listOfIntegers = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
    expect(fizzBuzz(15)).toEqual(listOfIntegers);
});