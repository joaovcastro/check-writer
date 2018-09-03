
const unitsAndTeens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thriteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const denoms = ['hundred', 'thousand'];


function convertToWords(number) {
	if (number < 20) {
		return unitsAndTeens[number];
	} else {
		if (number < 100) {
			const ten = Math.floor(number/10) - 2;
			let res = tens[ten];
			if (number % 10 !== 0) res += '-' + unitsAndTeens[number%10];
			return res; 
		} else {
			const cent = Math.floor(number/100);
			const lastTwoDigits = number % 100;
			if (lastTwoDigits < 20)  {
				return unitsAndTeens[cent] + ' hundred and ' + unitsAndTeens[lastTwoDigits];
			} else {
				const ten = tens[Math.floor(lastTwoDigits/10) - 2]
				let res = unitsAndTeens[cent] + ' hundred and ' + ten;
				if (number % 10 !== 0) res += '-' + unitsAndTeens[number % 10]
				return res;
			}
		}
	}
}


function main(number) {
	console.log('\n\ninput', number);
	let res = [];
	let result = '';
	// treat thousands
	if (number > 1000) 
		result +=  convertToWords(Math.floor(number / 1000)) + ' thousand ';

	// treat units
	result += convertToWords(Math.floor(number) % 1000);

	result === 'one' ? result += ' euro' : result += ' euros';

	// treat cents
	const decimals = (number + '').split('.');
	if (decimals.length > 1) {
		let decimalsStr = decimals[1];
		// console.log('str', decimalsStr, decimalsStr.length);
		if (decimalsStr.length == 1)
			decimalsStr += '0';

		const decimalsNumber = parseInt(decimalsStr);
		// console.log('decimalsNumber', decimalsNumber);
		const decs = convertToWords(decimalsNumber);
		decs === 'one' ? result += ' and ' + decs + ' cent' : result += ' and ' + decs + ' cents';
	} else {
		result += ' and zero cents';
	}

	console.log(result.slice(0,1).toUpperCase()+result.slice(1));
}


main(112.10);
main(874327.9);
main(978);
main(1.01);

