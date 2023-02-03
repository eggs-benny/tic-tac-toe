class Game {
  constructor() {
    this.grid = [[null, null, null],[null, null, null],[null, null, null]]
  }

  addSymbol(coords, symbol) {
    this.grid[coords[0]][coords[1]] = symbol
    return this.grid
  }

} 
module.exports = Game;