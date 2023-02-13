import React from 'react';
// import './Grid.css'
import { useState } from 'react';

export function Square() {
const [player, setPlayer] = useState('-')

const handleButtonClick = (e) => {
  if (player === "X") {
  setPlayer("O") } else {setPlayer("X")}
  e.preventDefault()
}
    return (
      <div margin="">
          <button className="square" onClick={handleButtonClick}>{player}</button>
        </div>
    );
  }