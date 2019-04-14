// turn on stop function 


$(document).ready(function(){


function turnOnStopLight() {
  $('#stopLight').css('background-color','red');
  $('#slowLight').css('background-color','black');
  $('#goLight').css('background-color','black');
    // change background color of stop light to red
    // changes background color of green and yellow to black
}

$('#stopButton').on('click',turnOnStopLight);
// turn on slow function
function turnOnSlowLight() { 
  $('#slowLight').css('background-color','yellow');
  $('#stopLight').css('background-color','black');
  $('#goLight').css('background-color','black');

  // change background color of slow light to yellow
  // changes background color of red and green to black
}

$('#slowButton').on('click',turnOnSlowLight);
// turn on go function
function turnOnGoLight() {
  $('#slowLight').css('background-color','black');
  $('#goLight').css('background-color','green');
  $('#stopLight').css('background-color','black');


    // change background color of go light to green
    // changes background color of red and yellow to black
}
$('#goButton').on('click',turnOnGoLight);

// set stop light click event

// set slow light click event

// set go light click event

})