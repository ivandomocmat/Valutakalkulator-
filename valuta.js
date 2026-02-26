const apiKey = '13d7882aeb54787e6d8daae8';
const knapp = document.getElementById("konverter");
knapp.addEventListener('click',function(){
	console.log("HEI");
})




function logExchangeRateInfo(data) {
	document.getElementById("tekst").textContent = ('1 ' +data.base_code+' to NOK '+ data.conversion_rates.NOK);
}


fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
	.then(response => response.json())
	.then(data => {
		logExchangeRateInfo(data);
	})
	.catch(error => {
		console.error('Error:', error);
	});



