var rocky = require('rocky');

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];
var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var settings = null;

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  // hour
  var ctx = event.context;
  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();
  var th = d.getHours();
  var tm = d.getMinutes();

  // Variables
  var TextTop = (h/2)-22;
  var BoxSpace = 6;
  var TimeLeft = tm;
  var BoxFill = 0;
  var BoxEdgeSpaces = 15;
  var BoxStartX = 0;
  // Calculate box width dynamical based on watch size
  var BoxWidth = (w - (2 * BoxEdgeSpaces) - (4 * BoxSpace))/4;
  var CurrentX = BoxStartX + BoxEdgeSpaces;

  var HourColour = 'green';
  var BoxFillC = 'green';
  var BoxOutline = 'green';
  var BoxFillPartialC = 'red';
<<<<<<< HEAD
=======

  if (settings) {

    HourColour = cssColor(settings.HourColour)
    BoxFillC = cssColor(settings.BoxFillC)
    BoxOutline = cssColor(settings.BoxOutline)
    BoxFillPartialC = cssColor(settings.BoxFillPartialC)

  }
>>>>>>> d98cf721ab46f063707a59ce0586fa150f1bc71a

  // Line width
  ctx.lineWidth=2;

  // Hour Number
  ctx.fillStyle = HourColour;
  //ctx.font = '42px bold Bitham';
  ctx.font = '49px Roboto-subset'
  ctx.textAlign = 'center';
  ctx.fillText(th, w/2, TextTop-50, w);

  // Date
  var clockDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()];
  ctx.font = '24px bold Gothic';
  ctx.textAlign = 'center';
  ctx.fillText(clockDate, w / 2, TextTop+70);

  var i = 0;
  for(i=0; i<4; i++) {

    ctx.strokeStyle = BoxOutline;
    ctx.strokeRect(CurrentX, TextTop+13, BoxWidth, 28);
    // Figure out if box is whole or partial
    // And calculate.  Remove 15mins from count
    if(TimeLeft>15) {

      // Make a full box, and use the full colour
      BoxFill = BoxWidth;
      ctx.fillStyle = BoxFillC;
    } else {
      // Make a partial box, and use the partial colour
      BoxFill = TimeLeft / 15 * BoxWidth;
      ctx.fillStyle = BoxFillPartialC;

    }

    if(TimeLeft > 0) {ctx.fillRect(CurrentX, TextTop + 13, BoxFill, 28);}
    CurrentX = CurrentX + BoxWidth + BoxSpace;
    TimeLeft = TimeLeft - 15;

  }

});

// -- TIME CHANGE EVENTS

rocky.on('minutechange',function(event){
    // Request the screen to be redrawn on next pass
  rocky.requestDraw();

});
rocky.on('message', function(event) {
  settings = event.data;
});

rocky.on('secondchange', function(e) {
  // Not keen on what I suspect is battery drain
  // Will see if this call was the culprit
  // rocky.requestDraw();
});

rocky.postMessage({command: 'settings'});

// Liberated from Clay.js
function cssColor(color) {
  if (typeof color === 'number') {
    color = color.toString(16);
  } else if (!color) {
    return 'transparent';
  }

  color = padColorString(color);

  return '#' + color;
}

/**
 * @param {string} color
 * @return {string}
 */
function padColorString(color) {
  color = color.toLowerCase();

  while (color.length < 6) {
    color = '0' + color;
  }

  return color;
}
