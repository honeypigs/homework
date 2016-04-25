window.onload=function() {
	var oBtn=document.querySelector('#btn');
	oBtn.addEventListener('click',function(){
		var xhr=null;
		try{
			xhr=new XMLHttpRequest();
		} catch(e) {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.open('get','http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a',true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if (xhr.status == 200 ) {
					var data=JSON.parse(xhr.responseText);
					show(data); //数据展示
					carousel(); //轮播
				} else {
					alert("出错了,Err:"+ xhr.status);
				}
			}
		};
	});
	function getChildren(node) {
		var childList = [];
		//alert(node.childNodes);
		for (var i = 0; i < node.childNodes.length; i++) {
			if (node.childNodes[i].tagName == "DIV") {
				childList.push( node.childNodes[i] );
			}
		}
		return childList;
	}
	function show(data) {
		var ocityName=document.querySelector(".cityName");
		//alert(data.city.name);
		ocityName.innerHTML= data.city.name;
		var box = document.querySelector("#container");
		//alert(box.length);
		var wChildList = getChildren(box);
		//alert(wChildList);
		for (var i = 0; i< wChildList.length; i++ ) {
			var nowdata = getData(data,i);
			var content = getChildren(wChildList[i]);
			content[0].innerHTML = nowdata.oaverageTemp;
			content[1].innerHTML = nowdata.oWeather;
			content[2].innerHTML = nowdata.oDate;
		}
	}
	function getData(data,num) {
		var oaverageTemp=data.list[num].temp.day+"℃";
		var oWeather=data.list[num].weather[num].main;
		var oDate=new Date(data.list[num].dt * 1000).toDateString();
		return {oaverageTemp,oWeather,oDate};
	}
	//轮播效果
	function carousel() {
		var box = document.querySelector("#container");
		var speed = 200;
		var location = 0;
		setInterval(function(){ move() },3000);
		function move() {
			location = location - speed;
			box.style.marginLeft = location + "px";
			if (location == -1200 ) {
				location = 200;
			}
		}
	}

};