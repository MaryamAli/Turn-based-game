//Mycroft

let BadGuy2 = function () {

  this.intelligence = 99;

  this.insult = function (num) {
    let insultPoints = num || 3;
    return this.intelligence= this.intelligence- insultPoints;
  };

};

export default BadGuy2;