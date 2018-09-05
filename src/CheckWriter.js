import React, { Component } from 'react';
import './App.css';

const unitsAndTeens = ['zero', 'one', 'two', 'three',
  'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thriteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = ['twenty', 'thirty', 'fourty', 'fifty',
  'sixty', 'seventy', 'eighty', 'ninety'];

const denoms = { 1000: ' thousand ', 100: ' hundred ' }

const numberToWords = (number) => {
  let numberInWords = '';

  if (number === 0) return 'zero';

  for (let i = 1000; i > 10; i /= 10) {
    if (Math.floor(number / i) > 0) {
      numberInWords += numberToWords(Math.floor(number / i)) + denoms[i];
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

const convertNumber = (number) => {
  if (number === "") return number;

  const input = number.split('.');
  console.log(input);

  // Convert euros
  if (input[0].length > 6) return 'The amount must be smaller than one million euros';

  let result = numberToWords(Number(input[0]));
  result === 'one' ? result += ' euro' : result += ' euros';

  // Convert cents
  if (input[1] && input[1] !== "") {
    let decimalsStr = input[1];
    if (decimalsStr.length == 1) decimalsStr += '0';
    // Ignore amounts smaller than cents
    else decimalsStr = decimalsStr.substr(0, 2);

    const cents = numberToWords(parseInt(decimalsStr));

    cents === 'one'
      ? result += ' and ' + cents + ' cent'
      : result += ' and ' + cents + ' cents';
  } else {
    result += ' and zero cents';
  }
  return result;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInWords: '',
    }
  }

  handleChange = (event) => {
    this.setState({ numberInWords: convertNumber(event.target.value) });
  }

  render() {
    return (
      <div className="App">
        <h1> Enter an amount between 0.0 and 999 999.99 </h1>
        <input onChange={this.handleChange} />
        <h1> {this.state.numberInWords} </h1>
      </div>
    );
  }
}

export default App;
