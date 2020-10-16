

//轮播内容
var showData = ["恭喜杨帅获得奖励华为P40一部", "恭喜朱文龙获得奖励奔驰一辆", "恭喜郭磊获得奖励加班一天",
  "恭喜张贺获得奖励放假一天"];

var main = document.getElementById("main");
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var show = document.getElementsByClassName("show");


for (var i = 0; i < showData.length; i++) {
  var newNode = document.createElement("li");
  newNode.id = "inf" + i;
  newNode.className = "show";
  newNode.innerText = showData[i];
  container1.appendChild(newNode);
}
for (var i = 0; i < showData.length; i++) {
  var newNode = document.createElement("li");
  newNode.id = "inf" + (i + 4);
  newNode.className = "show";
  newNode.innerText = showData[i];
  container2.appendChild(newNode);
}
//鼠标移入
main.addEventListener("mousemove", function () {
  for (i = 0; i < show.length; i++) {
    show[i].style.animationPlayState = "paused";
  }
}, false);
//鼠标移出
main.addEventListener('mouseleave', function () {
  for (i = 0; i < show.length; i++) {
    show[i].style.animationPlayState = "running";
  }
}, false);