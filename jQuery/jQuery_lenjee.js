//  ********  jQuery 源码阅读  ******* 

// jQuery模块分为：
//   · 入口模块
//   · 底层支撑模块
//   · 功能模块


// undefined是window对象的一个属性 
// 通过把参数undefined作为局部变量使用，但是又不传入任何值,可以缩短查找undefined时的作用域链，并且压缩代码时可以优化,
// 最主要是是确保参数undefined的值是undefined，因为undefined有可能会被重写为新的值，
// 例如：ie9之前，safair4.04之前，chrome17之前
(function(window,undefined){  // 创建自执行匿名函数，即创建了一个特殊函数作用域，该作用域中的代码不会和已有的同名海曙、方法、变量以及第三方库冲突 
	

	// ********* 入口模块 构造jQuery对象 *********
	// jQuery对象是一个类数组对象，还有连续的整型属性、length属性和大量的jQeury方法
	// 创建自执行匿名函数
	var jQuery=(function(){
        
        var jQuery=function(selector,context){
        	return new jQuery.fn.init(selector,context,rootjQuery);
        }

        return jQuery;
	})();
	
	window.jQuery=window.$=jQuery;
	// 把jQuery变量暴露给全局作用域window，并定义了别名$
})(window); 
// 通过传入window对象，可以使window对象变为局部变量（快的访问window对象）,亦可以在压缩代码时进行优化



















// 获取客户度大小  内容 + padding 
function getEleSpace(ele){
	return{
		width:ele.clientWidth,
		height:ele.clientHeight
	};
} 


// 偏移量  元素在 屏幕 上占用的可见空间
function getEleLocation(ele){
	var oHeight=ele.offsetHeight; // content + padding + border
	var oWidth=ele.offsetWidth;  // content + padding + border
	var oTop=ele.offsetTop;  // 外边框到包含元素内边框之间
	var oLeft=ele.offsetLeft;

	// 包含元素的引用保存在offsetParent中
	var current=ele.offsetParent; 

	while(current!==null){
		oTop=oTop+current.offsetTop;
		oLeft=oLeft+current.offsetLeft
		current=current.offsetParent;
	}

	return{
		_height:oHeight,
		_width:oWidth,
		_top:oTop,
		_left:oLeft
	}

}


// 滚动大小
function getPageSpace(){
	var ele=document.documentElement;
	var sWidth=Math.max(ele.scrollWidth,ele.clientWidth); // 网页宽 
	var sHeight=Math.max(ele.scrollHeight,ele.clientHeight); // 网页高

	var sTop=ele.scrollTop; 
	var sLeft=ele.scrollLeft;

	return{
		_width:sWidth,
		_height:sHeight,
		_top:sTop,
		_left:sLeft
	}
	

}




// 获取浏览器视口大小
function getViewSpace(){
	if(document.getcompatMode=='BackCompat'){// 浏览器是否运行在混杂模式下
		return{
			width:document.body.clientWidth,
			height:document.body.clientHeight
		};
	}else{
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		};
	}
}




































