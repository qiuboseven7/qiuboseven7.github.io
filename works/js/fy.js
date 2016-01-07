// JavaScript Document

$(function(){ 
		var oDiv=document.getElementById("real");
		var oPage1=oDiv.querySelector(".page1");
		var oPage2=oDiv.querySelector(".page2");
		var oFront=oDiv.querySelector(".front");
		var oBack=oDiv.querySelector(".back");
		
		var iNow=0;
		oDiv.onclick=function(){ 
				oPage1.style.transition="1s all ease";
				oPage1.style.transform="perspective(800px) rotateY(-180deg)";
				iNow++;
		}
		oPage1.addEventListener("transitionend",function(){
		oPage1.style.transition = "none";
		oPage1.style.transform = "none";
		
		oDiv.style.backgroundImage = "url(images/"+iNow%7+".jpg)";
		oFront.style.backgroundImage = "url(images/"+iNow%7+".jpg)";
		oBack.style.backgroundImage = "url(images/"+(iNow+1)%7+".jpg)";
		oPage2.style.backgroundImage ="url(images/"+(iNow+1)%7+".jpg)";

	},false);	
});
