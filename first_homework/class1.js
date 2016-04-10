// 类型转换
Number("123"); //123
String({});
Number("123hehe"); //NaN

Number(""); //0

Number(false); //0

Number(undefined); //NaN

Number(null); //0

parseInt('f91'); //91
Number('f91');

Number(valueOf: function () {
	return 2;
},toString : function () {
	return 2;
}); // 2 



if (typeof {a:1}.valueOf() === 'object'){
	Number({a:1}.toString());
} else {
	Number({a:1}.valueOf());
}

"1" + 2; //"12"


[] + []; // ""

[] + {}; //[object]

{} + []; // ""

{} + {}; ??

JavaScript同样将第一个空对象视为一个空代码块，整个表达式就变成“+ {}”。
这时，后一个空对象的ValueOf方法得到本身，再调用toSting方法，得到字符串“[object Object]”，
然后再将这个字符串转成数值，得到NaN。
所以，最后的结果就是NaN。转化过程如下：
+ {}
Number({})
Number({}.toString())
Number("[object Object]")

Node.js把命令行输入都放在eval中执行，所以不会把起首的大括号理解为空代码块加以忽略。

//闭包

function createIncrementor(start) {
  return function () {
    return start++;
  };
}
var inc = createIncrementor(5);

inc(); //
inc(); //
inc(); //


Immediately-Invoked Function Expression



Nodejs下载
作业1 ：切图（自选）
作业2 ：ES5 Array方法兼容ie8（forEach,fliter,reduce,map,indexOf）外加例子。
就是自己用js 封装方法
作业3 ：
	一个农场有n头羊

	每头羊出生算一岁，
	到5岁会每年自交繁殖一头羊，
	到15岁绝育，
	到20岁死亡。

	现在需要封装一个函数
	1. 计算n只羊繁殖year年后农场总羊数
	2. 可设置羊的数目和繁殖年数
	3. 函数内羊的数目n和繁殖年数year不可以在函数外访问
	4. 需要有羊的数目n,繁殖年数year,设置n的方法，设置year的方法，
	   和总数count方法

	   需要用闭包来实现，算法可以用递归算法也可以不用递归算法，自己选

	example

	function Hehe () {
		var num , year;
		return {
			setNum : function (x) {
				...
			},
			setYear : function (x) {
				...
			}
			....
		}
	} //用了闭包，return暴露接口

	var a = new Hehe();
	Hehe.num // undifiend
	Hehe.year // undifiend
	Hehe.setNum = 10 // num = 10
	Hehe.setYear = 10 // year = 10
	Hehe.count // 总数

作业2 ,作业3 ,选作一个就好. 
当然如果全做好了我请他（她）喝奶茶~~