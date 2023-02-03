const Game = require('../game/game');

describe('Game', () => {
  describe('Turn one', () => {
    it('Adds a nought to the grid top left', () => {
      const game = new Game();
      game.addSymbol([0,0], 'O');

      expect(game.grid).toEqual([['O', null, null],[null, null, null],[null, null, null]]);
    })

    it('Adds a nought to the grid bottom left', () => {
      const game = new Game();
      game.addSymbol([2,0], 'O');

      expect(game.grid).toEqual([[null, null, null],[null, null, null],['O', null, null]]);
    })
  })
})