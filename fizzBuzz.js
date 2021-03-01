const fizzBuzz = (n) => {
    listOfIntegers = [];
    for (let i = 1; i <= n; i++) {
        
        if (i % 3 === 0) {
            listOfIntegers.push('Fizz');
        } 
        if (i % 5 === 0) {
            listOfIntegers.push('Buzz');
        }
        if (i % 3 === 0 && i % 5 === 0) {
            listOfIntegers.push('FizzBuzz');
        } else {
            listOfIntegers.push(toString(i));
        }
    }
    return listOfIntegers;
};

module.exports = fizzBuzz;