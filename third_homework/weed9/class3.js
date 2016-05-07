RegExp

var r = /abc/igm;

r.ignoreCase
r.global
r.multiline

r.lastIndex
r.source


var r = /x/g;
var s = '_x_x';

r.lastIndex //0
r.test(s) 

r.lastIndex 1
r.test(s)

r.lastIndex //3
r.test(s)

r.lastIndex = 4;


var r = /a(b+)a/;
var arr = r.exec("_abbba_aba_");

arr //


var a1 = r.exec('_abbba_aba_');
a1 
a1.index 
r.lastIndex 

var a2 = r.exec('_abbba_aba_');
a2 
a2.index 
r.lastIndex 

var a3 = r.exec('_abbba_aba_');
a3 
a3.index 
r.lastIndex 

var a4 = r.exec('_abbba_aba_');
a4 
a4.index 
r.lastIndex

while(true) {
  var match = r.exec(s);
  if (!match) break;
  console.log(match[1]);
}


var m = 'abcabc'.match(/(.)b(.)/); //abc,a,c

/(.)b(.)\1b\2/.test("abcabc")
/y(..)(.)\2\1/.test('yabccab')
/y((..)\2)\1/.test('yabababab')

var html = '<b class="hello">Hello</b><i>world</i>';
var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

var match = tag.exec(html);

var m = 'abc'.match(/b(?=c)/);
/\d+(?!\.)/.exec('3.14')





var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', callback, true);

function callback(event) {
  var tag = event.target;
  console.log("Tag:" + tag.nodeName);
}



var previousX = 0;
var previousY = 0;
var previousT = 0;

window.addEventListener('mousemove', function(event) {
  if (!(previousX === undefined ||
        previousY === undefined ||
        previousT === undefined)) {
    var deltaX = event.screenX - previousX;
    var deltaY = event.screenY - previousY;
    var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    var deltaT = event.timeStamp - previousT;
    console.log(deltaD / deltaT * 1000);
  }

  previousX = event.screenX;
  previousY = event.screenY;
  previousT = event.timeStamp;
});


// 新建Event实例
var event = document.createEvent('Event');

// 事件的初始化
event.initEvent('build', true, true);

// 加上监听函数
var p = document.querySelector('p');
// p.addEventListener('build', function () {
//   console.log(1);
// }, false);

// 触发事件
p.addEventListener("click",function (e) {
  p.dispatchEvent("build");
  console.log(e);
})



var event = document.createEvent('Event');
event.initEvent('my-custom-event', true, true, {foo:'bar'});
someElement.dispatchEvent(event);


var a = 1;
setTimeout(function () {
  a ++;
  console.log(a);
},1000);
console.log(a);