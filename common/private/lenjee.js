/*
 * lenjee
 * 2016-03-29
 */

// 封装函数
(function(window,undefined){

	var lenjee=(function(){
		var lenjee=function(){
			return new lenjee.fn.init();
		}
	})();


	// 确定浏览器大小






	// 计算rem
	var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);




	window.lenjee=window.@@=lenjee;

})(window);



