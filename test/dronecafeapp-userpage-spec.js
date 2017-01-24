var DroneCafeAppUserPage = require('../test/page-objects/dronecafeapp-userpage');

describe('DroneCafeApp user page', function() {
    var dronecafeApp = {};

    beforeEach(function() {
      dronecafeApp = new DroneCafeAppUserPage();
      dronecafeApp.get();
    });

    it('should have a default title', function() {
      var title = dronecafeApp.getPageTitle();

      expect(title).toEqual('Drone Cafe');
    });
});