// 参考资料 https://www.cnblogs.com/cs-whut/p/13221406.html

/**
 * <canvas id="myCanvas" width="600" height="400" style="border:3px double #996633;">
*/

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var maxdepth = 4;
var curdepth = 0;
var alph = Math.PI / 4;

function growtree () {
  ctx.translate(300, 380);
  branch(-Math.PI / 2);
}

function branch (angle) {
  curdepth++;
  ctx.save();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 6;
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.translate(100, 0);
  ctx.scale(0.75, 0.75);
  if (curdepth <= maxdepth) {
    branch(alph);
    branch(-alph);
  }
  ctx.restore();
  curdepth--;
}

growtree();