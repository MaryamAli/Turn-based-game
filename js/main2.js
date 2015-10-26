import $ from 'jquery';
import _ from 'underscore';
//GoodGuy2 BadGuy2

import GoodGuy2 from './GoodGuy2';
import BadGuy2 from './BadGuy2';


// Good Guy2 Instance
let Watson = new GoodGuy2();

// Bad Guy2 Instance
let Mycroft = new BadGuy2();


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
    bgIntelligence2.text('Mewling Quim!');
    alert('Watson Remains the Most Introspective')
  } else {
    bgIntelligence2.text(Mycroft.intelligence);
    alert('Mycroft Bides His Time...');
    Watson.insult(10);
    ggIntelligence2.css('color', '#957f9c');
    ggIntelligence2.text(Watson.intelligence);
    setTimeout( function () {
      ggIntelligence2.css('color', '#244652');
    }, 1000);
  }

  console.log(mycroft);
})