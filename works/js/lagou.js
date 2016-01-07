// JavaScript Document
$(function(){
	var oUl = document.getElementById("ul1");
	var aLi = oUl.children;
	
	for(var i = 0; i < aLi.length; i++){
		lagou(aLi[i]);
	}
	
	function getDir(obj,oEvent){
		var x = oEvent.clientX - (obj.offsetLeft + obj.offsetWidth/2);
		var y = obj.offsetTop + obj.offsetHeight/2 - oEvent.clientY;
		
		// 0左 1下 2右 3 上
		return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
	}

	function lagou(oDiv){
	
		oDiv.onmouseover = function(ev){
			var oEvent = ev || event;
			
			var oFrom = oEvent.fromElement || oEvent.relatedTarget;
			
			if(oDiv.contains(oFrom)){
				return;
			}
			
			var oSpan = this.children[0];
			var n = getDir(this,oEvent);
			
			switch(n){
				case 0:
				
				oSpan.style.left = "-200px";
				oSpan.style.top = "0";
				 
				break;
				case 1:
				oSpan.style.left = "0";
				oSpan.style.top = "200px";
				break;
				case 2:
				oSpan.style.left = "200px";
				oSpan.style.top = "0"; 
				break;
				case 3:
				oSpan.style.left = "0";
				oSpan.style.top = "-200px";
				break;
				
			} 
			
			move(oSpan,{left:0,top:0});
			
		};
		
		oDiv.onmouseout = function(ev){
			var oEvent = ev || event;
			
			var oTo = oEvent.toElement || oEvent.relatedTarget;
			
			if(oDiv.contains(oTo)){
				return;
			}
			
			var oSpan = this.children[0];
			var n = getDir(this,oEvent);
			
			switch(n){
				case 0:
				move(oSpan,{left:-200,top:0});
				break;
				case 1:
				move(oSpan,{left:0,top:200});
				break;
				case 2:
				move(oSpan,{left:200,top:0});
				break;
				case 3:
				move(oSpan,{left:0,top:-200});
				break;
				
			} 

		};
	
	}
	
});
