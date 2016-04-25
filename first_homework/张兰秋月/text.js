
	

function countsheep () {
		var num , year;
		return {
			setNum : function (x) {
				num = x;
				return num;
			},
			setYear : function (x) {
				year = x;
				return year;
			},
		    count :function (num,year){
	          sheep_num = num;
		      var i;
		      for (i = 1; i < year; i++) {
		        if(i>=4 && i<15){
			      sheep_num++;
                  count(sheep_num,year-i);
                }
                if (i=20) sheep_num --;
              }
              return sheep_num;          
            },
		}
}
console.log(typeof count)
var a = new Hehe();
	countsheep.num 
	countsheep.year 
	countsheep.setNum = 10 
	countsheep.setYear = 10 
	countsheep.count 

 
