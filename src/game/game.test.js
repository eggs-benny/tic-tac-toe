const Game = require('../game/game');

describe('Game', () => {
  describe('Turn one', () => {
    it('Adds a nought to the grid', () => {
      const game = new Game();
      game.addSymbol([0,0], 'O');

      expect(game.grid()).toEqual([['O', null, null],[null, null, null],[null, null, null]]);
    })
  })
})