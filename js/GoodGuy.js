let GoodGuy = function() {

  this.intelligence = 99;

  this.insult = function(num) {
    let insultPoints = num || 3;
    return this.intelligence = this.intelligence - insultPoints;
  };

};


export default GoodGuy;

  // hit
  // SHERLOCK HOLMES 
  // bbc and WB characters
  // goodguy b. watson?
  // health
  // No, no, no. I am not insulting you. I am describing you.