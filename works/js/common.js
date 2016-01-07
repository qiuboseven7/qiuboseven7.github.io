// JavaScript Document
function $(fn){ 
		if(document.addEventListener){ 
				document.addEventListener('DOMContentLoaded',fn,false);
		}else{ 
				document.attachEvent('onreadystatechange',function(){ 
						if(document.readyState=='complete'){ 
								fn&&fn();
						}
				});
		}
};

function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,null))[name];
}

function move(obj,json,options){ 
		options=options||{};
		options.easing=options.easing||'ease-out';
		options.duration=options.duration||300;
		
		var start={};
		var dis={};
		
		for(var name in json){ 
				start[name]=parseFloat(getStyle(obj,name));
				dis[name]=json[name]-start[name];
		}
		
		var n=0;
		var count=Math.round(options.duration/30);
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){ 
				n++;
				for(var name in json){ 
						switch(options.easing){ 
								case 'linear':
								var a=n/count;
								var cur=start[name]+dis[name]*a;
								break;
								
								case 'ease-in':
								var a=n/count;
								var cur=start[name]+dis[name]*Math.pow(a,3);
								break;
								
								case 'ease-out':
								var a=1-n/count;
								var cur=start[name]+dis[name]*(1-Math.pow(a,3));
						}
						if(name=='opacity'){ 
								obj.style.opacity=cur;
								obj.style.filter='alpha(opacity:'+cur*100+')';
						}else{ 
								obj.style[name]=cur+'px';
						}
				}
				if(n==count){ 
						clearInterval(obj.timer);
						options.complete&&options.complete();
				}
		},30);
};

function fillZero(n){ 
		return n<10?'0'+n:''+n;
}

function rnd(n,m){
	return Math.floor(Math.random()*(m-n) + n);
}