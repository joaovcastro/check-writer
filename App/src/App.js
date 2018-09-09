import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import convertNumber from './CheckWriter/CheckWriter';
import { withStateHandlers } from 'recompose';
import Algorithm from './containers/Algorithm/'
import Code from '@material-ui/icons/Code';
import styled from 'styled-components';

const CheckWriter = styled(Paper)`
  width: 700px;
  height: 375px;
`;

const DialogContent = styled.div`
  padding: 50px 100px;
  text-align: center;
`;

const DialogMainText = styled(Typography)`
  line-height: 2em;
  font-size: 25px!important;
`;

const DialogSecondaryText = styled(Typography)`
  margin-top: 30px!important;
`;

const InfoButton = styled(Button)`
  position: fixed!important;
  right: 20px;
  bottom: 20px;
  background-color: #263238;
`;

const DialogHeader = styled(AppBar)`
  background-color: #70798C!important;
`;

const DialogTextInput = styled(TextField)`
  font-size: 20px!important;
`;

const WhiteTxt = styled(Typography)`
  color: white!important;
`;

const MainTextLine = styled.div`
padding-bottom: 10px!important;
`;


const App = ({ numberInWords, handleChange, open, handleOnOpen, handleClose }) => {
  return (<Fragment>
    <CheckWriter elevation={4} className="checkwriter">
      <DialogHeader position="static">
        <Toolbar>
          <WhiteTxt variant="headline" color="textSecondary">
            Check Writer
          </WhiteTxt>
        </Toolbar>
      </DialogHeader>
      <DialogContent className="container">
        <DialogMainText variant="title" gutterBottom>
          <MainTextLine>Enter an amount </MainTextLine>
          between € 0.00 and € 999 999.99
        </DialogMainText>
        <DialogTextInput
          fullWidth
          margin="normal"
          onChange={(event) => handleChange(event)}
        />
        <DialogSecondaryText variant="title" gutterBottom className="amount">
          {numberInWords}
        </DialogSecondaryText>
      </DialogContent >
    </CheckWriter>
    <Algorithm
      open={open}
      onClose={handleClose}
      className="bitch"
    />
    <InfoButton
      variant="fab"
      color="secondary"
      className="hbutton"
      onClick={handleOnOpen}
    >
      <Code />
    </InfoButton>
  </Fragment>
  );
}

// Add proptypes

export default withStateHandlers(
  {
    numberInWords: 'Written Amount',
    open: false,
  }, {
    handleChange: () => (event) => ({
      numberInWords: convertNumber(event.target.value),
    }),
    handleOnOpen: () => () => ({
      open: true,
    }),
    handleClose: () => () => ({
      open: false,
    }),
  },
)(App);