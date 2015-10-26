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
    // alert('Sherlock Remains the Most Perspicacious')
  } else {
    bgIntelligence.text(Moriarty.intelligence);
    // alert('Moriarty Sharpens His Wit >:|');
    Sherlock.insult(10);
    ggIntelligence.css('color', '#957f9c');
    ggIntelligence.text(Sherlock.intelligence);
    setTimeout( function () {
      ggIntelligence.css('color', '#244652');
    }, 1000);
  }

  console.log(moriarty);
})

// Level2 

// import GoodGuy from './GoodGuy';
// import BadGuy from './BadGuy';

// Good Guy2 Instance
let Watson = new GoodGuy();

// Bad Guy2 Instance
let Mycroft = new BadGuy();


// DOM Nodes Selected
let ggIntelligence2 = $('.ggIntelligence2');
let bgIntelligence2 = $('.bgIntelligence2');

let ggInsult2 = $('.ggInsult2');

// Show current (default) intelligence
ggIntelligence2.text(Watson.intelligence);
bgIntelligence2.text(Mycroft.intelligence);


// Setting up ON Events
ggInsult2.on('click', function () {

  // Generate random insult points
  // insult
  let num = _.random(0, 25);
  Mycroft.insult(num);

  if (Mycroft.intelligence <= 0) {
    bgIntelligence2.text('No, no, no. I am not insulting you. I am describing you.');
    // alert('Watson Remains the Most Introspective')
  } else {
    bgIntelligence2.text(Mycroft.intelligence);
    // alert('Mycroft Bides His Time...');
    Watson.insult(10);
    ggIntelligence2.css('color', '#957f9c');
    ggIntelligence2.text(Watson.intelligence);
    setTimeout( function () {
      ggIntelligence2.css('color', '#244652');
    }, 1000);
  }

  console.log(mycroft);
})



// Good Guy Instance
// let Sherlock = new GoodGuy();

// Bad Guy Instance
// let Moriarty= new BadGuy();

// Good Guy2 Instance
// let Watson = new GoodGuy2();

// Bad Guy2 Instance
// let Mycroft= new BadGuy2();
