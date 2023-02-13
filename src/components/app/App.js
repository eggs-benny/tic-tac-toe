import React from 'react';
import './App.css';
import { Grid } from '../Grid/Grid';

export function App() {

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