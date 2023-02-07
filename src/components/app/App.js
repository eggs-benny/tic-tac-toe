import React from 'react';
import './App.css';
import Grid from './../grid/Grid';

class App extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>
          <span className="highlight"></span>Tic-Tac-Toe
        </h1>
        <div className="app">
        <div className="grid">
          <Grid />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
