// JavaScript Document
$(function(){  
		var oImg=document.getElementById("img1");
		var i=0; 
		setInterval(function(){ 
				 i+=10;
				 oImg.style.transform= "rotate("+i+"deg)";
				
		},30);

});

$(function(){ 
		var oFootball=document.getElementById("font");
		var str='Welcome-to-my-personal-website'
		
		for(var i=0; i<str.length; i++){ 
				var oSpan=document.createElement('span');
				oSpan.innerHTML=str.charAt(i);
				oFootball.appendChild(oSpan);
		}
		var aSpan=oFootball.children;
		var i=0;
		var timer=null;
		timer=setInterval(function(){ 
				move(aSpan[i],{opacity:1});
				i++;
				if(i==str.length){ 
						clearInterval(timer);
				}
		},100);
});


$(function(){ 
		var oTab=document.getElementById("tab");
		var oUl=oTab.children[3];
		var aLi=oTab.children[2].children;
		var oNext=oTab.children[0];
		var oPrev=oTab.children[1];
		var now=0;
		var ready=true;
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=oUl.children[0].offsetWidth*oUl.children.length+'px';	
		for(var i=0; i<aLi.length; i++){ 
				(function(index){ 
						aLi[i].onmouseover=function(){ 
								now=index;
								tab();
						}
				})(i);
		}
		var timer=setInterval(function(){ 
				if(!ready) return;
				ready=false;
				now++;
				tab();
		},2000);
		function tab(){ 
				for(var i=0;i<aLi.length;i++){
						aLi[i].className='';
				}
				if(now==3){
						aLi[0].className='active';	
				}else{
						aLi[now].className='active';	
				}
				
				move(oUl,{left:-now*oUl.children[0].offsetWidth},{duration:500,complete:function(){ 
						ready=true;
						if(now==3){ 
								oUl.style.left=0;
								now=0;
						}
				}});
				
		};
		oNext.onclick=function (){
				if(!ready) return;
				ready=false;
				now++;
				tab();
		};
		oPrev.onclick=function(){ 
				if(!ready) return;
				ready=false;
				if(now==0){ 
						now=1;
						oUl.style.left=-oUl.offsetWidth/2+'px';
				}else{ 
						now--;
				}
				tab();
		}
		oTab.onmouseover=function(){ 
				clearInterval(timer);
		};
		oTab.onmouseout=function(){ 
				timer=setInterval(function(){ 
						if(!ready) return;
						ready=false;
						now++;
						tab();
				},2000);
		};
});

$(function(){ 
		var oBox=document.getElementById("clock");
		var oH=oBox.querySelector(".hour");
		var oM=oBox.querySelector(".min");
		var oS=oBox.querySelector(".sec");
		
		for(var i=0; i<60; i++){ 
				var oSpan=document.createElement('span');
				if(i%5==0){ 
						oSpan.classList.add('on');
						if(i==0){ 
								oSpan.innerHTML="<em>12<\/em>";
						}else{ 
								oSpan.innerHTML="<em>"+i/5+"<\/em>";
						}
						oSpan.children[0].style.transform="rotate("+-i*6+"deg)";
				}
				oSpan.style.transform="rotate("+i*6+"deg)";
				oBox.appendChild(oSpan);
				
				clock();
				setInterval(clock,1000);
				function clock(){ 
						var oDate=new Date();
						var iH=oDate.getHours();
						var iM=oDate.getMinutes();
						var iS=oDate.getSeconds();
						oH.style.transform="rotate("+iH*30+"deg)";
						oM.style.transform="rotate("+iM*6+"deg)";
						oS.style.transform="rotate("+iS*6+"deg)";
				}
		}
});

$(function(){ 
	var oUl=document.getElementById('ul1');
	var aLi=oUl.children;
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.left=i*20+'px';
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=1;i<aLi.length;i++){
				if(i<=this.index){
					move(aLi[i],{left:i*20},{time:1000});
				}else{
					move(aLi[i],{left:500+(i-1)*20},{time:1000});
				}
			}
		};	
	}
});