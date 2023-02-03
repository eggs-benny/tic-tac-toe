const Game = require('../game/game');

describe('Game', () => {
  describe('Turn one', () => {
    it('Adds a nought to the grid top left', () => {
      const game = new Game();
      game.addSymbol([0,0]);

      expect(game.grid).toEqual([['X', null, null],[null, null, null],[null, null, null]]);
    })

    it('Adds a cross to the grid bottom left', () => {
      const game = new Game();
      game.addSymbol([2,0]);

      expect(game.grid).toEqual([[null, null, null],[null, null, null],['X', null, null]]);
    })
  })

  describe('Turn two', () => {
    it('Doesn`t allow another turn in same grid position', () => {
      const game = new Game();

      game.addSymbol([0,0]);

      expect(() => game.addSymbol([0,0], 'X')).toThrow(Error)
    })
  })

  describe('Automatically switch between O & X', () => {
    it('changes after each turn', () => {
      const game = new Game();
      game.takeTurn([0,0]);
      game.takeTurn([2,0]);
      game.takeTurn([2,2]);

      expect(game.grid).toEqual([['O', null, null],[null, null, null],['X', null, 'O']]);
    })
  })
})