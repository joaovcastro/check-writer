# Check Writer
![app](http://image.prntscr.com/image/txhYSp68QzWQbn4-oikc0A.png)

Check writer is a program that given a Euro amount between 0 and 999,999.00 the program outputs a worded representation of an Euro amount on a check.

While amounts bigger than 999 999.99 will result in an error message, amounts with more than two decimal places will not, since those decimal places will be ignored.

## Description
### Algorithm
The program makes use of a recursive algorithm that analyzes the provided number in groups of three or less units and appends the result with the corresponding denominator (thousands, euros, cents)

### Interface
The interface follows Google's material design specification, was was developed with the use of the Material UI node package

## Installation and Usage
Given node and yarn are installed in the computer

### Installation 
Clone the repository
`git clone https://github.com/joaovcastro/check-writer.git`

Go to the correct directory:
`cd check-writer/App/`

Install dependencies
`yarn`

Run the app
`yarn start`

A new webpage will be opened on `localhost:3000`

### Usage

Once the app is running, just enter an amount in the input box and the app will calculate abnd return the amount in real time.

##### Alternatively the algorithm can be tested in the terminal:
Go to the directory
`cd Script/`

Run the script 
`node check-writer [input amount]`

### Testing
Some unit tests were also created. To run them, just navigate to the app directory
`cd App/`

Run the tests
`yarn test`
