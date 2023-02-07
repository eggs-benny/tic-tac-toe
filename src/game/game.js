class Game {
  constructor() {
    this.grid = [null, null, null, null, null, null, null, null, null];
    this.symbol = "X";
    this.gameComplete = false;
  }

  addSymbol(coords) {
    if (this.grid[coords] != null) {
      throw new Error("Error, can't take turn in same position");
    } else {
      this.grid[coords] = this.symbol;
      return this.grid;
    }
  }

  changeSymbol(currentSymbol) {
    currentSymbol === "O" ? (this.symbol = "X") : (this.symbol = "O");
  }

  takeTurn(coords) {
    // if (this.gameComplete === false) {
      this.changeSymbol(this.symbol);
      this.addSymbol(coords);
      this.checkEndGame();
    // }
  }

  checkEndGame() {
    if (this.checkWin) {
      this.gameComplete = true
      return "We have a winner!"
    }
    if (this.checkDraw) {
      this.gameComplete = true
      return "Draw!"
    }
  }

  checkDraw() {
    if (this.grid.indexOf(null) === -1) {
      return true;
    }
  }

  checkWin() {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <= 7; i++) {
      const condition = winningConditions[i];
      let pos1 = this.grid[condition[0]];
      let pos2 = this.grid[condition[1]];
      let pos3 = this.grid[condition[2]];
      if (pos1 === null || pos2 === null || pos3 === null) {
        continue;
      }
      if (pos1 === pos2 && pos2 === pos3) {
        return true;
      }
    }
  }
}

module.exports = Game;
