// JavaScript Document
$( function(){
	var oC = document.getElementById("c1");
	
	var gd = oC.getContext("2d");
	gd.strokeStyle = "white";
	oC.onmousedown = function(ev){
		var x = ev.clientX - oC.offsetLeft;
		var y = ev.clientY - oC.offsetTop;
		gd.beginPath();
		gd.moveTo(x,y);
		
		document.onmousemove = function(ev){
			
			var x = ev.clientX - oC.offsetLeft;
			var y = ev.clientY - oC.offsetTop;
			gd.lineTo(x,y);
			//gd.closePath();
			gd.stroke();
				
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			
		};
		
		return false;	
	};
 
});