import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import convertNumber from 'CheckWriter/CheckWriter';

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
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Paper elevation={4}>
              <h1> Enter an amount between 0.0 and 999 999.99 </h1>
              <TextField
                id="euro-amount"
                onChange={this.handleChange}
                margin="normal"
              />
              <h1> {this.state.numberInWords} </h1>
            </Paper>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default App;
