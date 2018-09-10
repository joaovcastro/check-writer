import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Highlight from 'react-highlight';

import styled from 'styled-components';

const PopUpHeader = styled(AppBar)`
  background-color: #673AB7!important;
  margin-bottom: -25px;
`;

const PopUpDialog = styled(Dialog)`
  margin-top: -20px!important;
  margin-bottom: -40px!important;
`;

const Algorithm = ({ handleClose, open, onClose }) =>
  <PopUpDialog
    open={open}
    onClose={handleClose}
    onBackdropClick={handleClose}
    className="algorithm"
    aria-labelledby="simple-dialog-title"
  >
    <PopUpHeader position="static">
      <Toolbar>
        <Grid
          container
          spacing={8}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="headline" style={{ color: "white" }}>
              Algorithm
        </Typography>
          </Grid>
          <Grid item>
            <Button size="small" onClick={onClose}>
              <Close style={{ color: "white" }} />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </PopUpHeader>
    <Highlight
      className='javascript'
      language="javascript"
    >
      {`
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
          numberInWords += numberToWords(Math.floor(number / i)) 
          + denoms[i];
          number %= i;
        }
      }
    
      if (number > 0) {
        if (number < 20) numberInWords += unitsAndTeens[number];
        else {
          numberInWords += tens[Math.floor(number / 10) - 2];
          if (number % 10 > 0) numberInWords += ' ' 
          + unitsAndTeens[number % 10];
        }
      }
    
      return numberInWords;
    }



    const convertNumber = (number) => {
    
      if (number === "") return number;
      if (!(Number(number))) return 'Please enter a number';
      
      // Convert euros
      const input = number.split('.');
      if (input[0].length > 6) 
        return 'The amount must be smaller than one million euros';
    
      let result = numberToWords(Number(input[0]));
      result === 'one' ? result += ' Euro' : result += ' Euros';
    
      // Convert cents
      if (input[1] && input[1] !== "") {
        let decimalsStr = input[1];
        if (decimalsStr.length === 1) decimalsStr += '0';
        // Ignore amounts smaller than cents
        else decimalsStr = decimalsStr.substr(0, 2);
    
        const cents = numberToWords(Number(decimalsStr));
    
        cents === 'one'
          ? result += ' and ' + cents + ' cent'
          : result += ' and ' + cents + ' cents';
      } else {
        result += ' and zero cents';
      }
      return result.slice(0, 1).toUpperCase() + result.slice(1);
    }
      `}
    </Highlight>
  </PopUpDialog>;

export default Algorithm;
