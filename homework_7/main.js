const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary = 1){
	return parseFloat(this.tax * salary).toFixed(2);
}

function getMiddleTaxes() {
	return parseFloat(this.tax * this.middleSalary).toFixed(2);
}

function getTotalTaxes() {
	return parseFloat(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

function getMySalary() {
	setInterval(()=>{
		const salary =  Math.floor(Math.random() * 500) + 1500;
		const taxes = parseFloat(this.tax * salary).toFixed(2);
        const profit = parseFloat(salary - taxes).toFixed(2);
        console.log({salary: salary,taxes: taxes,profit: profit});
    },10000);
}

console.log(`Результат работы функции getMyTaxes: ${getMyTaxes.call(ukraine, 500)} </br>`);
console.log(`Результат работы функции getMiddleTaxes: ${getMiddleTaxes.call(litva)} </br>`);
console.log(`Результат работы функции getTotalTaxes: ${getTotalTaxes.call(latvia)} </br>`);
getMySalary.call(latvia);