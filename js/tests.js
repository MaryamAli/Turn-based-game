import GoodGuy from './GoodGuy';

import BadGuy from './BadGuy';
// import goodguy attack method
// import bad guy attack method
// badguy health
// goodguy health


(function() {
  'use strict';

  describe('About GoodGuy', function() {
    beforeEach(function() {
      window.x = new GoodGuy();
    });
    describe('creating a good guy', function() {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof GoodGuy).to.equal(true);
      });
    });
    
    describe('my player intelligence', function() {
      it('should have full intelligence upon start', function() {
        expect(x.intelligence).to.equal(99);
      });
    });
    describe ('player not responding to insults', function() {
      it ('should lower the intelligence after being insulted', function() {
        x.insult();
        expect(x.intelligence).to.be.below(99);
      })
    });
  });

}());