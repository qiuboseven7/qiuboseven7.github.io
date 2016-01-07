// JavaScript Document
$( function(){
	
	var oDiv = document.getElementById("div1");
	
	var R = 4;
	var C = 7;
	var len = R*C;
	
	for(var r = 0; r < R; r++){
		for(var c = 0; c < C; c++){
			var oSpan = document.createElement("span");
			
			oSpan.style.width = oDiv.offsetWidth/C + "px";
			oSpan.style.height = oDiv.offsetHeight/R + "px";
			oDiv.appendChild(oSpan);
			oSpan.style.left = oSpan.offsetWidth*c + "px";
			oSpan.style.top  = oSpan.offsetHeight*r + "px";
			oSpan.style.backgroundPosition = -oSpan.offsetLeft +"px -" + oSpan.offsetTop + "px";
		}
	}
	
	var aSpan = oDiv.children;
	
	var iNow = 0;
	oDiv.onclick = function(){
		for(var i = 0; i < len; i++){
			aSpan[i].style.transition = "none";
			aSpan[i].style.transform = "none";
			aSpan[i].style.opacity = "1";
			aSpan[i].style.backgroundImage = "url(images/CR"+iNow+".jpg)";
		}
		
		iNow++;
		if(iNow == 3){
			iNow = 0;
		}
		oDiv.style.backgroundImage = "url(images/CR"+iNow+".jpg)";
		for(var i = 0; i < len; i++){
			aSpan[i].style.transition = "0.4s all ease";
			var x = aSpan[i].offsetLeft + aSpan[i].offsetWidth/2 - oDiv.offsetWidth/2;
			var y = aSpan[i].offsetTop+ aSpan[i].offsetHeight/2 - oDiv.offsetHeight/2;
			
			aSpan[i].style.transform = "translate("+x+"px,"+y+"px) rotateX("+rnd(-180,180)+"deg)  rotateY("+rnd(-180,180)+"deg)";

			aSpan[i].style.opacity = "0";
			
		}
	};
});