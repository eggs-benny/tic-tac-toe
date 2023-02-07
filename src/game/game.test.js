const Game = require("./game");

describe("Game", () => {
  describe("Turn one", () => {
    it("Adds a nought to the grid top left", () => {
      const game = new Game();
      game.addSymbol([0]);

      expect(game.grid).toEqual(
        ["X", null, null,
        null, null, null,
        null, null, null]
      );
    });

    it("Adds a cross to the grid bottom left", () => {
      const game = new Game();
      game.addSymbol([6]);

      expect(game.grid).toEqual(
        [null, null, null,
        null, null, null,
        "X", null, null]
      );
    });
  });

  describe("Turn two", () => {
    it("Doesn`t allow another turn in same grid position", () => {
      const game = new Game();

      game.addSymbol([0]);

      expect(() => game.addSymbol([0])).toThrow(Error);
    });
  });

  describe("Automatically switch between O & X", () => {
    it("changes after each turn", () => {
      const game = new Game();
      game.takeTurn([0]);
      game.takeTurn([6]);
      game.takeTurn([8]);

      expect(game.grid).toEqual([
        "O", null, null,
        null, null, null,
        "X", null, "O"
      ]);
    });

    it("allows a player to have a second attempt after an illegal move", () => {
      const game = new Game();
      game.takeTurn([0]);
      expect(() => game.addSymbol([0])).toThrow(Error);
      game.takeTurn([1]);

      expect(game.grid).toEqual([
        "O", "X", null,
        null, null, null,
        null, null, null
      ]);
    });
  });

  describe("Game ends", () => {
    describe("when grid is full", () => {
      it("announces a draw", () => {
        const game = new Game();
        game.takeTurn([0]);
        game.takeTurn([1]);
        game.takeTurn([2]);
        game.takeTurn([3]);
        game.takeTurn([4]);
        game.takeTurn([6]);
        game.takeTurn([5]);
        game.takeTurn([8]);
        game.takeTurn([7]);

        expect(game.grid).toEqual([
          "O", "X", "O",
          "X", "O", "O",
          "X", "O", "X"
        ]);
        console.log(game.grid);
        expect(game.takeTurn()).toEqual("Draw!");
      });
    });

      it("announces a win if 9 moves", () => {
        const game = new Game();
        game.takeTurn([0]);
        game.takeTurn([2]);
        game.takeTurn([1]);
        game.takeTurn([4]);
        game.takeTurn([5]);
        game.takeTurn([7]);
        game.takeTurn([6]);
        game.takeTurn([8]);
        game.takeTurn([3]);

        expect(game.grid).toEqual([
          "O", "O", "X",
          "O", "X", "O",
          "O", "X", "X"
        ]);
        console.log(game.grid);
        expect(game.checkEndGame()).toEqual("We have a winner!");
        expect(game.checkEndGame()).not.toEqual("Draw!");
      });

    describe("when a player does not win", () => {
      it("wont announce a win and stop play", () => {
        const game = new Game();
        game.takeTurn([8]);
        game.takeTurn([5]);
        game.takeTurn([7]);
        game.takeTurn([4]);
        game.takeTurn([1]);

        expect(game.checkEndGame()).not.toEqual("We have a winner!");
      });
    });

    describe("when a player wins", () => {
      it("announce a win and stop play", () => {
        const game = new Game();
        game.takeTurn([8]);
        game.takeTurn([5]);
        game.takeTurn([7]);
        game.takeTurn([4]);
        game.takeTurn([6]);

        expect(game.checkEndGame()).toEqual("We have a winner!");
      });
    });
  });
});
