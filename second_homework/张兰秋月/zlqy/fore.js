    
var container = document.querySelector('#wholeContainer');
  var slider = document.querySelector('#slider');
  var list = document.querySelectorAll('#list');  
  var index = 1;
  var timer
  

   
  function showButton () {
    for(var i = 0;i<list.lenth;i++){
        if (list[i].className == 'on') {
            list[i].className == '';
            break;
        }
        list[index-1].className = 'on';
    }
  }

  function animate (offset) {
    var newLeft = slider.style.left + offset;
    var time = 300;
    var inteval = 10;
    var speed = offset/(time/inteval);
    function go () {
        if ((speed<0 &&  slider.style.left > newLeft) || (speed>0 &&  slider.style.left < newLeft))  {
            slider.style.left = speed + 'px';
            setTimeout(go,inteval);
        }
        else{
            slider.style.left = newLeft + 'px';
            if (newLeft>0) {
              slider.style.left = -3000 + 'px';
            }
            if (newLeft<-3000) {
              slider.style.left = 0 + 'px';
            }
        }
    }

    slider.style.left = newLeft + 'px';
    if (newLeft>0) {
        slider.style.left = -3000 + 'px';
    }
    if (newLeft<-3000) {
        slider.style.left = 0 + 'px';
    }
  } 

  function play (){
    timer = setInterval(function(){
        list[index].onclick();
    },3000)
  }
  function stop (){
    clearInterval(timer);
  }

  for (var i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        var myIndex = this.getAttribute('index');
        var offset = -600 * (myIndex - index);
        animate(offset);
        index = myIndex;
        showButton();
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
  }




;(function () {
  var url = 'http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a';
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.onload = function (e) {
  if (this.status === 200) {
    callback(JSON.parse(this.responseText));
     }
  }
  xhr.send();

  function callback (res) {
    console.log(res);
    // var temp = document.querySelectorAll('temp');
    var block, city, date, state, min, max, pic;
    // block = document.querySelectorAll('.block');
    city = document.querySelectorAll('.city');
    date = document.querySelectorAll('.date');
    forecast = document.querySelectorAll('.forecast');
    min = document.querySelectorAll('.min');
    max = document.querySelectorAll('.max');
    pic = document.querySelectorAll('.picture');
    num = block.length;
    for(var i = 0; i < num; i ++) {
     city[i].innerHTML = res.city.name;
     date[i].innerHTML = new Date(res.list[i].dt * 1000);
     forecast[i].innerHTML = res.list[i].weather[0].description;
     min[i].innerHTML = res.list[i].temp.min;
     max[i].innerHTML = res.list[i].temp.max;
     switch(res.list[i].weather[0].description) {
       case 'light rain' : pic[i].style.cssText="background:url('../picture/rain.jpg') "; break;
       case 'moderate rain' : pic[i].style.cssText="background:url('../picture/rain.jpg') "; break;
       case 'light sky' : pic[i].style.cssText="background:url('../picture/cloud.jpg') "; break;
       case 'broken clouds' : pic[i].style.cssText="background:url('../picture/cloud.jpg') "; break;
       default: pic[i].style.cssText="background:url('../picture/sun.jpg') "; break;
        }
    }
                
  }
}());


     