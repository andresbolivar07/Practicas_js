const edadEnSegundos = (edad) => edad * 31557600;

const tempFarenheit = (tempCelsius) => (tempCelsius*1.8) + 32;

const netIncome = (profits, cost, taxes) => (parseInt((profits - cost)*((100-taxes)/100)));

export {edadEnSegundos, tempFarenheit, netIncome};