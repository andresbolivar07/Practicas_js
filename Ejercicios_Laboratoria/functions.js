//ejercicio 1
const edadEnSegundos = (edad) => edad * 31557600;

//ejercicio 2
const tempFarenheit = (tempCelsius) => (tempCelsius*1.8) + 32;

//ejercicio 3

const netIncome = (saleValue, cost) => saleValue - cost;

const tax = (netIncome, taxes) => netIncome*taxes;

const totalIncome = (netIncome, tax) => netIncome - tax;



export {edadEnSegundos, tempFarenheit, netIncome, tax, totalIncome};