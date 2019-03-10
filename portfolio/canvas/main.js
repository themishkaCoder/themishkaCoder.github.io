var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var gradient = ctx.createLinearGradient(50, 30, 50, 150);

gradient.addColorStop(0, 'yellow');

gradient.addColorStop(1, 'orange');



ctx.beginPath();
//arc(x,y,r,sAngle,eAngle,counterclockwise);
ctx.arc(75*2, 75*2, 50*2, 0, Math.PI * 2, true);
ctx.moveTo(90*2,65*2);
ctx.lineTo(110*2, 65*2)
ctx.moveTo(45*2,65*2);
ctx.lineTo(65*2, 65*2);
ctx.moveTo(60*2,100*2);
ctx.lineTo(90*2, 100*2);
ctx.fillStyle = gradient;
ctx.fill();
ctx.stroke();

