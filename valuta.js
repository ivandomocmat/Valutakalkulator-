const apiKey = '13d7882aeb54787e6d8daae8';

//Knapp for konverter
const knapp = document.getElementById("konverter");

//input felt
const amountInput = document.getElementById("amount");

//begge valuta menyer
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");

// swap button
const swapBtn = document.getElementById("swapBtn");


//resultat
const result = document.getElementById("result");

// aamountInput.value ganger med toCurrecny.value som ligger i data.conversion_rates
function logExchangeRateInfo(data) {
	result.textContent = ( amountInput.value * data.conversion_rates[toCurrency.value]);
}

//saw button function
swapBtn.addEventListener('click', function(){
	let temp = fromCurrency.value
	fromCurrency.value = toCurrency.value
	toCurrency.value = temp
})


//Functions
knapp.addEventListener('click',function(){
	console.log(amountInput.value);
	console.log(fromCurrency.value);
	console.log(toCurrency.value);



// fromCurrency.value henter currency fra api
	fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`)
	.then(response => response.json())
	.then(data => {
		logExchangeRateInfo(data);
	})
	.catch(error => {
		console.error('Error:', error);
	});

})











