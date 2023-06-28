const ageInSeconds = (age) => age * 31557600;

const tempFarenheit = (tempCelsius) => (tempCelsius*1.8) + 32;

const netIncome = (profits, cost, taxes) => (parseInt((profits - cost)*((100-taxes)/100)));

const isPrime = (number) => {

    if (number === 1 || number === 2) {
        return true;
    }

    if(number === 0){
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
        return false;
        }
    }
    return true;
    }

const lastDigit = (number) => number %10;

const numberCounter = (number) => {

    if ( number === 0) {
        return 1;
    }
    if (number < 0 ) {
        number = number * -1;
    }
    let numberDigits = 0;
    
    while (number >= 1) {
        number = parseInt(number/10);
        numberDigits++;
    }
    return numberDigits;
}

const randomArrayGenerator = () => { 
    
    const randomNumbers = [];

    for (let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;
}

const generateRandomArrays = (rows, columns) => {

    let matriz = [];

    for (let i = 0; i < rows; i++) {
        matriz[i] = [];
        for (let j = 0; j < columns; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return matriz;
}

const numberFactorial = (number) => {
    if ( number === 0) {
        return 1;
    }
    if (number < 0 ) {
        number = number * -1;
    }
    
    let multiplication = 1;

    for(let i = 1; i <= number; i++) {
        multiplication = multiplication * i
    }
    return multiplication;
}

const multipleNumbers = (number1, number2) => {

    if(number2 % number1 ===0) {
        return true;
    }
    return false;
}

const mayorNumberArray = (randomNumbers) => {
    
    let maximum = randomNumbers[0];
    let maximumPosition = 0;

    for (let i = 1; i < randomNumbers.length; i++) {
            
        if (randomNumbers[i] > maximum) {
        maximum = randomNumbers[i];
        maximumPosition = i;
        }
    }
    return maximum, maximumPosition;
}

export {ageInSeconds, tempFarenheit, netIncome, isPrime, lastDigit, numberCounter, randomArrayGenerator, generateRandomArrays, numberFactorial, multipleNumbers, mayorNumberArray};