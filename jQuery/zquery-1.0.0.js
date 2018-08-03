

//基本结构是闭包
(function(window,undefined){
var
	zQuery = function(selector){
		return new zQuery.fn.init(selector);
	};
zQuery.fn = zQuery.prototype = {//让zquery的原型对象等于jQuery.fn
	constructor:zQuery,
	init:function(selector){
		//布尔值是假的情况下传回空的jquery对象
		//trim在低版本使用不了
		selector = zQuery.trim(selector);
		if(!selector){
			return this;
		}
		//如果是函数的话返回有documnent的jquery对象,当页面所有的DOM节点加载完毕后执行传入的函数
		else if(zQuery.isFunction(selector)){
			document.addEventListener('DOMContentLoaded',function(){
				selector();
			});
			this[0] = document;
			this.length = 1;
			//return this;
		//处理字符串
		}else if(zQuery.isString(selector)){
			//HTML代码处理
			if(zQuery.isHTML(selector)){
			var tmpDOM = document.createElement('div');
			tmpDOM.innerHTML = selector;
			//包装成jQuery对象
			/*for(var i = 0;i<tmpDOM.children.length;i++){
				this[i] = tmpDOM.children[i];
			}
			this.length = tmpDOM.children.length;*/

			//转化为伪数组
			[].push.apply(this,tmpDOM.children);
			//return this;//返回jQuery对象

			//选择器处理
			}else{
				var doms = document.querySelectAll(selector);
				//包装成jQuery对象
				/*for(var i = 0;i<doms.length;i++){
					this[i] = doms[i];
				}*/
				//转化为伪数组
				[].push.apply(this,doms);

				this.length = doms.length;
			}
			//处理数组
		}else if(zQuery.isArray(selector)){
			//传进来的数组转化为真数组
			var tmpArr = [].slice.call(selector);
			//转化为伪数组
			[].push.apply(this,tmpArr);
			//return this;
			//返回参数对应的内容的jquery对象
		}else{
			this[0]  = selector;
			this.length = 1;
			//return this;
		}

		return this;
	}
}


//

zQuery.extend  = {

}
zQuery.isFunction = function(str){
	return typeof str === 'function'
}
zQuery.isString = function(str){
	return typeof str === 'string'
}
zQuery.isHTML = function(str){
	 return str.charAt(0) == "<" && str.charAt(str.length - 1) == ">" && str.length >=3;
}
zQuery.trim = function(str){
	if(zQuery.isString(str)){
		return str.replace(/^\s+|\s+$/g,'')//用正则去除空格
	}else{
		return str;
	}
}
zQuery.isArray = function(str){
	return  zQuery.isObject(str) && length in str//判断数组，首先是是对象且有长度
}
zQuery.isObject = function(str){
	return typeof str == 'object';
}
zQuery.fn.init.prototype = zQuery.fn;//

window.zQuery = window.$ = zQuery;
})(window)