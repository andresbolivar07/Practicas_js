/* eslint-disable no-undef */
import { edadEnSegundos, tempFarenheit, netIncome } from '../src/functions.js'

describe('edadEnSegundos', () => {
    it('should be a function', () => {
        expect(typeof edadEnSegundos).toBe('function');
    });

    it('convert 25 years to seconds', () => {
        expect(edadEnSegundos(25)).toBe(788940000);
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

