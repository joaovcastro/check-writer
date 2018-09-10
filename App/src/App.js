import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import convertNumber from './Scripts/CheckWriter/CheckWriter';
import { withStateHandlers } from 'recompose';
import Algorithm from './containers/Algorithm/'
import Code from '@material-ui/icons/Code';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
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
  margin-top: 15px!important;  
  line-height: 30px!important;
`;

const InfoButton = styled(Button)`
  position: fixed!important;
  right: 20px;
  bottom: 20px;
  background-color: #263238;
`;

const DialogHeader = styled(AppBar)`
  background-color: #607D8B!important;
`;

const WhiteText = styled(Typography)`
  color: white!important;
`;

const MainTextLine = styled.div`
  padding-bottom: 10px!important;
`;

const App = ({ numberInWords, handleChange, open, handleOnOpen, handleClose }) => {
  return (
    <Fragment>
      <CheckWriter
        elevation={4}
      >
        <DialogHeader
          position="static"
        >
          <Toolbar>
            <Grid
              container
              spacing={8}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <WhiteText
                  variant="headline"
                  color="textSecondary"
                >
                  Check Writer
                </WhiteText>
              </Grid>
              <Grid item>
                <EuroSymbol />
              </Grid>
            </Grid>
          </Toolbar>
        </DialogHeader>
        <DialogContent>
          <DialogMainText
            variant="title"
            gutterBottom
          >
            <MainTextLine>
              Enter an amount
            </MainTextLine>
            between € 0.00 and € 999 999.99
        </DialogMainText>
          <TextField
            fullWidth
            margin="normal"
            className="user-input"
            onChange={(event) => handleChange(event)}

          />
          <DialogSecondaryText
            variant="title"
            gutterBottom
          >
            {numberInWords}
          </DialogSecondaryText>
        </DialogContent >
      </CheckWriter>
      <Algorithm
        open={open}
        onClose={handleClose}
      />
      <InfoButton
        variant="fab"
        color="secondary"
        onClick={handleOnOpen}
      >
        <Code />
      </InfoButton>
    </Fragment>
  );
}

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