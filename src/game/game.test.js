const Game = require('../game/game');

describe('Game', () => {
  describe('Turn one', () => {
    it('Adds a nought to the grid top left', () => {
      const game = new Game();
      game.addSymbol([0,0], 'O');

      expect(game.grid).toEqual([['O', null, null],[null, null, null],[null, null, null]]);
    })

    it('Adds a cross to the grid bottom left', () => {
      const game = new Game();
      game.addSymbol([2,0], 'X');

      expect(game.grid).toEqual([[null, null, null],[null, null, null],['X', null, null]]);
    })
  })

  describe('Turn two', () => {
    it('Adds X to a game with a O in it', () => {
      const game = new Game();
      game.addSymbol([0,0], 'O');
      game.addSymbol([2,0], 'X');

      expect(game.grid).toEqual([['O', null, null],[null, null, null],['X', null, null]]);
    })

    it('Doesn`t allow another turn in same grid position', () => {
      const game = new Game();

      game.addSymbol([0,0], 'O');

      expect(() => game.addSymbol([0,0], 'X')).toThrow(Error)
    })
  })
})