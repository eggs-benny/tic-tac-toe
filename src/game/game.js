class Game {
  constructor() {
    this.grid = [[null, null, null],[null, null, null],[null, null, null]]
  }

  addSymbol(coords, symbol) {
    if (this.grid[coords[0]][coords[1]] != null) {throw new Error("Error, can't take turn in same position"); 
  } else {
    this.grid[coords[0]][coords[1]] = symbol
    return this.grid}
  }


} 
module.exports = Game;
