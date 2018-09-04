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

  // Treat euros
  let result = numberToWords(Number(number.split('.')[0]));
  result === 'one' ? result += ' euro' : result += ' euros';

  // treat cents
  const decimals = number.split('.');

  if (decimals.length > 1 && decimals[1] !== "") {
    let decimalsStr = decimals[1];
    if (decimalsStr.length == 1) decimalsStr += '0';
    else decimalsStr = decimalsStr.substr(0, 2);

    const decs = numberToWords(parseInt(decimalsStr));

    decs === 'one'
      ? result += ' and ' + decs + ' cent'
      : result += ' and ' + decs + ' cents';
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
        <h1> Enter a number between 0.0 and 999 999.99 </h1>
        <input onChange={this.handleChange} />
        <h1> {this.state.numberInWords} </h1>
      </div>
    );
  }
}

export default App;
