import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Readable from './Readable';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Readable />
      </MuiThemeProvider>
    );
  }
}

export default App;
