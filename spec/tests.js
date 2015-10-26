(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// PROFESSOR JAMES MORIARTY
// badguy b. Lestrade?
// health

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BadGuy = function BadGuy() {

  this.intelligence = 99;

  this.insult = function (num) {
    var insultPoints = num || 3;
    return this.intelligence = this.intelligence - insultPoints;
  };
};

exports["default"] = BadGuy;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GoodGuy = function GoodGuy() {

  this.intelligence = 99;

  this.insult = function (num) {
    var insultPoints = num || 3;
    return this.intelligence = this.intelligence - insultPoints;
  };
};

exports["default"] = GoodGuy;

// hit
// SHERLOCK HOLMES
// bbc and WB characters
// goodguy b. watson?
// health
// No, no, no. I am not insulting you. I am describing you.
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _GoodGuy = require('./GoodGuy');

var _GoodGuy2 = _interopRequireDefault(_GoodGuy);

var _BadGuy = require('./BadGuy');

var _BadGuy2 = _interopRequireDefault(_BadGuy);

// import goodguy attack method
// import bad guy attack method
// badguy health
// goodguy health

(function () {
  'use strict';

  describe('About GoodGuy', function () {
    beforeEach(function () {
      window.x = new _GoodGuy2['default']();
    });
    describe('creating a good guy', function () {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof _GoodGuy2['default']).to.equal(true);
      });
    });

    describe('my player intelligence', function () {
      it('should have full intelligence upon start', function () {
        expect(x.intelligence).to.equal(99);
      });
    });
    describe('player not responding to insults', function () {
      it('should lower the intelligence after being insulted', function () {
        x.insult();
        expect(x.intelligence).to.be.below(99);
      });
    });
  });
})();

},{"./BadGuy":1,"./GoodGuy":2}]},{},[3])


//# sourceMappingURL=tests.js.map
