
const unitsAndTeens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thriteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const denoms = {
  1000: ' thousand ',
  100: ' hundred ',
}


function convertToWords(number) {
  let numberInWords = '';

  if (number === 0) return 'zero';

  for (let i = 1000; i > 10; i /= 10) {
    if (Math.floor(number / i) > 0) {
      numberInWords += convertToWords(Math.floor(number / i)) + denoms[i];
      number %= i;
    }
  }

  if (number > 0) {
    if (number < 20) numberInWords += unitsAndTeens[number];
    else {
      numberInWords += tens[Math.floor(number / 10) - 2];
      if (number % 10 > 0) numberInWords += ' ' + unitsAndTeens[number % 10];
    }
  }

  return numberInWords;
}


function main(number) {
  console.log('\n\ninput', number);
  let result = '';

  result += convertToWords(Math.floor(number));
  
  result === 'one' ? result += ' euro' : result += ' euros';
  
  // treat cents
  const decimals = (number + '').split('.');
  if (decimals.length > 1 && decimals[1] !== "") {
    let decimalsStr = decimals[1];
    if (decimalsStr.length == 1)
      decimalsStr += '0';
    const decimalsNumber = parseInt(decimalsStr)
    const decs = convertToWords(decimalsNumber);
    result += ' and ' + decs + ' cent';
    if (decs !== 'one') result += 's';

  } else {
    result += ' and zero cents';
  }

  console.log(result.slice(0, 1).toUpperCase() + result.slice(1));
}


main(112.10);
main(874327.9);
main(978);
main(1.01);
main(100);
main(3000);
main(12);
