// JavaScript Document

$(function(){ 
		var oDiv=document.getElementById('div1');
		var oMask=document.getElementById('mask');
		var oBigDiv=document.getElementById('bigDiv');
		var oBigImg=document.getElementById('bigImg');
		oDiv.onmouseover=function(){
			oMask.style.display=oBigDiv.style.display='block';	
		};
		oDiv.onmouseout=function(){
			oMask.style.display=oBigDiv.style.display='none';	
		};
		oDiv.onmousemove=function(ev){
			var oEvt=ev||event;
			var l=oEvt.clientX-oMask.offsetWidth/2;
			var t=oEvt.clientY-oMask.offsetHeight/2;
			

			if(l<0) l=0;
			if(l>oDiv.offsetWidth-oMask.offsetWidth){
				l=	oDiv.offsetWidth-oMask.offsetWidth;
			}
			if(t<0) t=0;
			if(t>oDiv.offsetHeight-oMask.offsetHeight)
				t=oDiv.offsetHeight-oMask.offsetHeight;
			
			oMask.style.left=l+'px';
			oMask.style.top=t+'px';	

			oBigImg.style.left=-l/(oDiv.offsetWidth-oMask.offsetWidth)*(oBigImg.offsetWidth-oBigDiv.offsetWidth)+'px';
			oBigImg.style.top=-t/(oDiv.offsetHeight-oMask.offsetHeight)*(oBigImg.offsetHeight-oBigDiv.offsetHeight)+'px';
		};
});