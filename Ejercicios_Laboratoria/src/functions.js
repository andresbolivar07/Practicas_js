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

export {ageInSeconds, tempFarenheit, netIncome, isPrime};