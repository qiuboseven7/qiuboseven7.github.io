// JavaScript Document
$(function(){ 
		var oDs=document.getElementById("ds");
		var endTime = new Date(2018,6,14).getTime();
		
		tick();
		function tick(){ 
				var dis = endTime - new Date().getTime();
				var s = (dis/1000);
				var d = fillZero(parseInt(s/86400));
					s %= 86400;
				var h = fillZero(parseInt(s/3600)); 
					s %= 3600;
				var m =fillZero(parseInt(s/60));
				var sec =fillZero(parseInt(s%60)); 
				
				oDs.innerHTML='<span class="sp">倒计时:</span><span>'+d+'</span> 天<span>'+h+'</span> 时<span>'+m+'</span> 分<span>'+sec+'</span> 秒';
		};
		setInterval(tick,1000);
});
