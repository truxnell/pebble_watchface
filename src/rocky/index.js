var rocky = require('rocky');


rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  // hour
  var ctx = event.context;

  // Minute glasses
  var m1 = event.context;
  var m2 = event.context;
  var m3 = event.context;
  var m4 = event.context;

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();
  var th = d.getHours();
  var tm = d.getMinutes();

  // Positioning
  var TextTop = (h/2)-22;
  var BoxWidth = 17;
  var BoxStartX = 55

  // Hour Number
  ctx.fillStyle = 'white';
  ctx.font = '42px bold Bitham';
  ctx.textAlign = 'left';
  ctx.fillText(th, 2, TextTop, w);

  m1.fillStyle = 'white';
  m1.fillRect(BoxStartX, TextTop + 13, BoxWidth, 28);

  m2.fillStyle = 'white';
  m2.fillRect(BoxStartX+BoxWidth, TextTop + 13, BoxWidth, 28);

  m3.fillStyle = 'white';
  m3.fillRect(BoxStartX+(BoxWidth*2), TextTop + 13, BoxWidth, 28);

  m4.fillStyle = 'white';
  m4.fillRect(BoxStartX+(BoxWidth*3), TextTop + 13, BoxWidth, 28);

  //graphics_fill_radial(m1,rect,GOvalScaleModeFitCircle,10,DEG_TO_TRIANGLE(142),DEG_TO_TRIANGLE(402));

  //ctm.fillStyle = 'white';
  //ctm.font = '42px light Bitham';
  //ctm.textAlign = 'left';
  //ctm.fillText(lt, wv, lv, w);

  //ctd.fillStyle = 'gray';
  //ctd.font = '14px Gothic';
  //ctd.textAlign = 'center';
  //ctd.fillText(zork(), w/2, h-20, w);

});

// -- TIME CHANGE EVENTS

rocky.on('minutechange',function(event){
  // Display a message in the system logs
  //console.log("Another minute with your Pebble!");

  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});
