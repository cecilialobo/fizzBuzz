const fizzBuzz = (n) => {
    listOfIntegers = [];
    for (let i = 1; i <= n; i++) {
        let value = toString(i);

        if (i % 3 === 0) {
            value = 'Fizz';
        }

        if (i % 5 === 0) {
            value = 'Buzz';
        }
        
        if (i % 3 === 0 && i % 5 === 0) {
            value = 'FizzBuzz';
        }

        listOfIntegers.push(value);
    }
    return listOfIntegers;
};

module.exports = fizzBuzz;