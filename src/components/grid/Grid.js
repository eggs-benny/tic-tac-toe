import React from 'react';
import './Grid.css';
import { Square } from '../Square/Square';

export function Grid() {
    return (
      <>
        <div className="row">
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>
        <div className="row">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="row">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </>
    );
  }
