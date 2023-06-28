/* eslint-disable no-undef */
import { ageInSeconds, tempFarenheit, netIncome, isPrime, lastDigit, numberCounter, randomArrayGenerator, generateRandomArrays, numberFactorial, multipleNumbers, mayorNumberArray } from '../src/functions.js'

describe('ageInSeconds', () => {
    it('should be a function', () => {
        expect(typeof ageInSeconds).toBe('function');
    });

    it('convert 25 years to seconds', () => {
        expect(ageInSeconds(25)).toBe(788940000);
    });
});

describe('tempFarenheit', () => {
    it('should be a function', () => {
        expect(typeof tempFarenheit).toBe('function');
    });
    it('convert 30 celsius to Farenheit', () => {
        expect(tempFarenheit(30)).toBe(86);
    });
});

describe('netIncome', () => {
    it('should be a function', () => {
        expect(typeof netIncome).toBe('function');
    });
    it('subtract expenses and tax from income', () => {
        expect(netIncome(1000, 400, 19)).toBe(486);
    });

});

describe('isPrime', () => {
    it('should be a function', () => {
        expect(typeof isPrime).toBe('function');
    });
    it('is prime number', () => {
        expect(isPrime(11)).toBe(true);
    });
    it('is not prime number', () => {
        expect(isPrime(9)).toBe(false);
    });
    it('is prime number', () => {
        expect(isPrime(1)).toBe(true);
    });
    it('is not prime number', () => {
        expect(isPrime(0)).toBe(false);
    });
});

describe('lastDigit', () => {
    it('should be a function', () => {
        expect(typeof lastDigit).toBe('function');
    });
    it('the last digit number', () => {
        expect(lastDigit(87)).toBe(7);
    });   
});

describe('numberCounter', () => {
    it('should be a function', () => {
        expect(typeof numberCounter).toBe('function');
    });
    it('the number of digits', () => {
        expect(numberCounter(237)).toBe(3);
    });
    it('when number is 0', () => {
        expect(numberCounter(0)).toBe(1);
    });
    it('number is negative', () => {
        expect(numberCounter(-24)).toBe(2);
    });
});

describe('randomArrayGenerator', () => {
    it('should be a function', () => {
        expect(typeof randomArrayGenerator).toBe('function');
    });
    it('array generate', () => {
        const result = randomArrayGenerator();
        expect(result.length).toBe(10);
    });
});

describe('generateRandomArrays', () => {
    it('should be a function', () => {
        expect(typeof generateRandomArrays).toBe('function');
    });
    it('array generate', () => {
        const result = generateRandomArrays(4,5);
        expect(result.length).toBe(4);
    });
});

describe('numberFactorial', () => {
    it('should be a function', () => {
        expect(typeof numberFactorial).toBe('function');
    });
    it('Factorial of number', () => {
        expect(numberFactorial(5)).toBe(120);
    });
    it('when number is 0', () => {
        expect(numberFactorial(0)).toBe(1);
    });
    it('number is negative', () => {
        expect(numberFactorial(-4)).toBe(24);
    });
});

describe('multipleNumbers', () => {
    it('should be a function', () => {
        expect(typeof multipleNumbers).toBe('function');
    });
    it('number is multiple', () => {
        expect(multipleNumbers(5,10)).toBe(true)
    });
    it('number is not multiple', () => {
        expect(multipleNumbers(8,7)).toBe(false)
    });
});

describe('mayorNumberArray', () => {
    it('should be a function', () => {
        expect(typeof mayorNumberArray).toBe('function');
    });
    it('Position of mayor number in array', () => {
        expect(mayorNumberArray([15,8,96,98,25,36])).toBe(3)
    });
});
