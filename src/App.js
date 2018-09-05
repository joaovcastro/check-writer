import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import convertNumber from './CheckWriter/CheckWriter';
import { withStateHandlers } from 'recompose';

const App = ({ numberInWords, handleChange, }) =>
  <div className="App">
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper elevation={4}>
          <Typography variant="title" gutterBottom>
            Enter an amount between 0.0 and 999 999.99
                 </Typography>
          <TextField
            id="euro-amount"
            fullWidth
            margin="normal"
            onChange={(event) => handleChange(event)}
          />
          <Typography variant="title" gutterBottom>
            {numberInWords || ""}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  </div>;


export default withStateHandlers(
  {
    numberInWords: '',
  }, {
    handleChange: () => (event) => ({
      numberInWords: convertNumber(event.target.value),
    }),
  },
)(App);