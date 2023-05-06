//ejercicio 1
const edadEnSegundos = (edad) => edad * 31557600;

//ejercicio 2
const tempFarenheit = (tempCelsius) => (tempCelsius*1.8) + 32;

//ejercicio 3

const netIncome = (profits, cost, taxes) => (profits - cost)*((100-taxes)/100)



export {edadEnSegundos, tempFarenheit, netIncome};