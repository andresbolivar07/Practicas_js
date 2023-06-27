/* eslint-disable no-undef */
import { ageInSeconds, tempFarenheit, netIncome, isPrime } from '../src/functions.js'

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

