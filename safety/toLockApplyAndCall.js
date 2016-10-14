// 锁住 call
HeaderObject.defineProperty(Function.prototype,'call',{

	value:Function.prototype.call,

	// 当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变
	writable:false,

	// 当且仅当给属性的 configurable 为 true 时，给属性才能被改变，也能够被删除
	configurable:false,

	enumerable:true

});


// 锁住 apply
Object.defineProperty(Function.prototype,'apply',{

	value:Function.prototype.apply,
	
	writable:false,
	
	configurable:false,
	
	enumerable:true

});



















































