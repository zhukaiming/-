

(function($){
	function getRandom(min,max){
		return Math.round(min + (max-min)*Math.random());
	}
	var $wish = $('.wish');
	var $wall = $('.wall');

	//$('.wish').pep({ constrainTo: '.wall'});

	//获取墙高和宽
	var wallWidth = parseInt($('.wall').css('width'));
	var wallHeight = parseInt($('.wall').css('height'));
	var wishWidth = parseInt($wish.css('width'));
	var wishHeight = parseInt($wish.css('height'));

	function handwish($elem){
		//卡片拖拽
		$elem.pep({  constrainTo: '.wall' });
		//遍历随机显示
		$elem.each(function(){
			$(this).css({
				transform: 'matrix(1,0,0,1,'+getRandom(0,wallWidth-wishWidth)+','+getRandom(0,wallHeight-wishHeight)+')'
			})		
		})
		//
		$elem.hover(function(){
			$(this).css({
				zIndex:999
			})
		},function(){
			$(this).css({
				zIndex:0
			})
		})		
	}
	handwish($wish);

	//监听删除事件
	//前台发送请求到后台，后台根据请求做出处理,对文件进行操作，根据操作结果把结果返回到前台,
	//发送del请求,server接收到del请求,调用remove方法把文件里面对应的id删除，删除成功后把删除成功的信息返回到前台，前台拿到信息后,根据返回值移除相应节点。
	//事件代理
	$wall.on('click','.close',function(){
		var $this = $(this);
		var self = this;
		console.log($this.data('id'));//
		//
		$.ajax({
			url:'/Wish/del'+ $this.data('id'),//分隔符/
			dataType:'json'//发送的数据类型

		})
		.done(function(data){
			console.log(data)
			
			if(data.status == 0){//成功删除
				//移除
				$(self.parentNode).remove();
			}
		})
	})

	//监听添加
	$('.sub-btn').on('click',function(){
		let val = $('#content').val();//获取val,获取文本框中的内容
		//发送ajax请求到server
		$.ajax({
			url:'/Wish/add',
			data:{content:val},//传送文本框中的内容
			dataType:'json',//发送的数据类型
			type:'POST'
		})
		.done(function(data){
			//填充数据到dom节点
			console.log(data);
			if(data.status === 0){//成功
				var $dom = $(`<div class="wish" style = "background: ${data.data.colorArr}">
				<a href="javascript:;" class = "close" data-id = "${data.data.id}"></a>
				${data.data.content}
				</div>`);
				//
				$wall.append($dom);
				handwish($dom);
				$('#content').val('');
			}else{
				alert('失败')
			}
		})
	})

})(jQuery);