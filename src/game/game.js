class Game {
  constructor() {
    this.grid = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];
    this.symbol = "X";
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
    currentSymbol === "O" ? (this.symbol = "X") : (this.symbol = "O")
  }

  takeTurn(coords) {
    this.changeSymbol(this.symbol);
    this.addSymbol(coords);
  }

  endGame() {
    if (this.grid.indexOf(null) === -1) {
      return "Draw!";
    } else { return "BLAH"}
  }
}

module.exports = Game;
