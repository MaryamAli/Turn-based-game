import $ from 'jquery';
import _ from 'underscore';

import GoodGuy from './GoodGuy';
import BadGuy from './BadGuy';


// Good Guy Instance
let Sherlock = new GoodGuy();

// Bad Guy Instance
let Moriarty = new BadGuy();


// DOM Nodes Selected
let ggIntelligence = $('.ggIntelligence');
let bgIntelligence = $('.bgIntelligence');

let ggInsult = $('.ggInsult');

// Show current (default) intelligence
ggIntelligence.text(Sherlock.intelligence);
bgIntelligence.text(Moriarty.intelligence);


// Setting up ON Events
ggInsult.on('click', function () {

  // Generate random insult points
  // insult
  let num = _.random(0, 25);
  Moriarty.insult(num);

  if (Moriarty.intelligence <= 0) {
    bgIntelligence.text('Mewling Quim!');
    alert('Sherlock Remains the Most Perspicacious')
  } else {
    bgIntelligence.text(Moriarty.intelligence);
    alert('Moriarty Sharpens His Wit >:|');
    Sherlock.insult(10);
    ggIntelligence.css('color', 'red');
    ggIntelligence.text(Sherlock.intelligence);
    setTimeout( function () {
      ggIntelligence.css('color', 'black');
    }, 1000);
  }

  console.log(moriarty);
})





// Good Guy Instance
// let Sherlock = new GoodGuy();

// Bad Guy Instance
// let Moriarty= new BadGuy();
