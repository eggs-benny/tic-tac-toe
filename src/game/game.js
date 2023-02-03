class Game {
  constructor() {
    this.grid = [[null, null, null],[null, null, null],[null, null, null]]
  }

  addSymbol(coords, symbol) {
    this.grid = [['O', null, null],[null, null, null],[null, null, null]]
  }

} 
module.exports = Game;