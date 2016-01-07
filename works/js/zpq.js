// JavaScript Document
$(function(){ 	
	var oUl = document.getElementById("ul11");
	var aLi = oUl.children;
	var len = aLi.length;
	var zIndex = 1;
	var aPos = [];
	for(var i = 0; i < len; i++){
		aPos[i] = {left:aLi[i].offsetLeft,top:aLi[i].offsetTop};
		aLi[i].style.left = aPos[i].left +　"px";
		aLi[i].style.top = aPos[i].top + "px";
	}
	
	for(var i = 0; i < len; i++){
		aLi[i].style.position = "absolute";
		aLi[i].style.margin = "0";
		drag(aLi[i]);
		aLi[i].index = i;
	}
	function drag(obj){
		
		obj.onmousedown = function(ev){
			var oEvent = ev || event;
			var disX = oEvent.clientX - obj.offsetLeft;
			var disY = oEvent.clientY - obj.offsetTop;
			obj.style.zIndex = zIndex++;
			clearInterval(obj.timer);
			document.onmousemove = function(ev){
				var oEvent = ev || event;
				
				obj.style.left = oEvent.clientX - disX + "px";
				obj.style.top = oEvent.clientY - disY + "px"; 
				for(var i = 0; i < len; i++){
					aLi[i].className = "";
				}
				var oNear = findMin(obj);
				
				oNear && (oNear.className = "box");
			};
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				obj.releaseCapture && obj.releaseCapture();
				
				var oNear = findMin(obj);
				if(oNear){
					
					var tmp = obj.index;
					obj.index = oNear.index;
					oNear.index = tmp;
					
					move(oNear,aPos[oNear.index]); 
				}
				
				 move(obj,aPos[obj.index]);
			};
			obj.setCapture && obj.setCapture();
			return false;	
		};
	}

	function findMin(obj){
		var iMin = 99999999;
		var iMinIndex = -1;
		for(var i = 0; i < len; i++){
			if(obj == aLi[i]) continue;
			if(collTest(obj,aLi[i])){
				var dis = getDis(obj,aLi[i]);
				if(iMin > dis){
					iMin = dis;
					iMinIndex = i;
				}
				
			}
		}
		
		if(iMinIndex == -1){
			return null;
		}
		return aLi[iMinIndex];
		
	}
	
	function getDis(obj1,obj2){
		var a = obj1.offsetLeft - obj2.offsetLeft;
		var b = obj1.offsetTop - obj2.offsetTop;
		
		return Math.sqrt(a*a + b*b);
	}
	
	function collTest(obj1,obj2){
		var l1 = obj1.offsetLeft;
		var t1 = obj1.offsetTop;
		var r1 = l1 + obj1.offsetWidth;
		var b1 = t1 + obj1.offsetHeight;

		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 = l2 + obj2.offsetWidth;
		var b2 = t2 + obj2.offsetHeight;
		
		if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){//没碰上
			return false;
		} else {
			return true;
		}
	}
	var oBtn = document.getElementById("btn1");
	oBtn.onclick = function(){
		
		aPos.sort(function(){
			return Math.random() - 0.5;
		});
		
		for(var i = 0; i < len; i++){
			aLi[i].index = i;
			move(aLi[i],aPos[i]);
		}
	};
});
