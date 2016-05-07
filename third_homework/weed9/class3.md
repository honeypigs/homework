# RegExp #
+ 修饰词属性 i g m
+ `lastIndex``source`
+ 函数
	+ test()
	+ exec()
		+ 组匹配
		+ `input`,`index`
	+ match()：返回一个数组，成员是所有匹配的子字符串。
	+ search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
	+ replace()：按照给定的正则表达式进行替换，返回替换后的字符串。
	+ split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。

+ 特殊字符
	+ \cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
	+ [\b] 匹配退格键(U+0008)，不要与\b混淆。
	+ \n 匹配换行键。
	+ \r 匹配回车键。
	+ \t 匹配制表符tab（U+0009）。
	+ \v 匹配垂直制表符（U+000B）。
	+ \f 匹配换页符（U+000C）。
	+ \0 匹配null字符（U+0000）。
	+ \xhh 匹配一个以两位十六进制数表示的字符。
	+ \uhhhh 匹配一个以四位十六进制数表示的unicode字符。
+ 断言
	+ `x(?=y)` 先行断言
	+ `x(?!y)` 先行否定断言

# 事件 #
+ dispatchEvent()
+ 事件的传播
	+ 第一阶段：从window对象传导到目标节点，称为“捕获阶段”（capture phase）。
	+ 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
	+ 第三阶段：从目标节点传导回window对象，称为“冒泡阶段”（bubbling phase）。
+ 鼠标事件
	+ click
	+ dbclikc
	+ mouseup，mousedown
	+ mousemove
	+ mouseover，mouseenter(no bubble)
	+ mouseout，mouseleave
	+ contextmenu
+ 键盘事件
	+ keydown：按下键盘时触发该事件。
	+ keypress：只要按下的键并非Ctrl、Alt、Shift和Meta，就接着触发keypress事件。
	+ keyup：松开键盘时触发该事件。
+ 进度事件
    + abort事件：当进度事件被中止时触发。如果发生错误，导致进程中止，不会触发该事件。
    + error事件：由于错误导致资源无法加载时触发。
    + load事件：进度成功结束时触发。
    + loadstart事件：进度开始时触发。
    + loadend事件：进度停止时触发，发生顺序排在error事件\abort事件\load事件后面。
    + progress事件：当操作处于进度之中，由传输的数据块不断触发。
    + timeout事件：进度超过限时触发。
+ 自定义事件
	+ event.initEvent()
>     type：事件名称，格式为字符串。
>     bubbles：事件是否应该冒泡，格式为布尔值。可以使用event.bubbles属性读取它的值。
>     cancelable：事件是否能被取消，格式为布尔值。可以使用event.cancelable属性读取它的值。
>     option：为事件对象指定额外的属性。

# 动画 #
+ 渲染流程
	+ js->style->layout->paint->composit
	+ width
	+ color
	+ transform

 