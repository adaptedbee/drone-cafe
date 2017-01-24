var DroneCafeAppCookPage = require('../test/page-objects/dronecafeapp-cookpage');

describe('DroneCafeApp pokemons page', function() {
    var dronecafeApp = {};

    beforeEach(function() {
      dronecafeApp = new DroneCafeAppCookPage();
      dronecafeApp.get();
    });

    it('should contain an ordered dishes list', function() {
      var orderedList = dronecafeApp.getOrderedList();

      expect(orderedList.length).not.toEqual(0);
    });

    it('should contain a cooking dishes list', function() {
      var cookingList = dronecafeApp.getCookingList();

      expect(cookingList.length).not.toEqual(0);
    });
});