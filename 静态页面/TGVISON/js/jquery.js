// JavaScript Document
$(document).ready(function() {

	/*--------------------搜索------------------------*/
	$(".nav_l span a").click(function(event) {
		$(".nav_search").slideDown();
	});
	$(".nav_search a").click(function(event) {
		$(this).parent(".nav_search").slideUp();
	});

	/*-------------------导航+滑动---------------------*/
	
	var caseTop=$("#part").offset().top-64;
	var serTop=$("#part1").offset().top-64;	
	var aboutTop=$("#about").offset().top-64;
	var contactTop=$("#contact").offset().top-64;
	
	$(window).scroll(function(e){
		var numTop=$(document).scrollTop();
		if(numTop<caseTop){
			$(".navtrue a").eq(0).css('color', '#fff');
			$(".navtrue a").eq(0).siblings().css('color', '#999999');
			$(".navtrue a").eq(0).children('div').stop().fadeTo(200,1);
			$(".navtrue a").eq(0).siblings().children('div').stop().fadeTo(200,0);
		}else if (numTop<serTop) {
			$(".navtrue a").eq(1).css('color', '#fff');
			$(".navkaishi").css('background','none');
			$(".navtrue a").eq(1).siblings().css('color', '#999999');
			$(".navtrue a").eq(1).children('div').stop().fadeTo(200,1);
			$(".navtrue a").eq(1).siblings().children('div').stop().fadeTo(200,0);

		}else if (numTop<aboutTop) {
			$(".navtrue a").eq(2).css('color', '#fff');
			$(".navkaishi").css('background','none');
			$(".navtrue a").eq(2).siblings().css('color', '#999999');
			$(".navtrue a").eq(2).children('div').stop().fadeTo(200,1);
			$(".navtrue a").eq(2).siblings().children('div').stop().fadeTo(200,0);
		}else if(numTop<contactTop){
			$(".navtrue a").eq(3).css('color', '#fff');
			$(".navkaishi").css('background','none');
			$(".navtrue a").eq(3).siblings().css('color', '#999999');
			$(".navtrue a").eq(3).children('div').stop().fadeTo(200,1);
			$(".navtrue a").eq(3).siblings().children('div').stop().fadeTo(200,0);
		}else{
			$(".navtrue a").eq(4).css('color', '#fff');
			$(".navkaishi").css('background','none');
			$(".navtrue a").eq(4).siblings().css('color', '#999999');
			$(".navtrue a").eq(4).children('div').stop().fadeTo(200,1);
			$(".navtrue a").eq(4).siblings().children('div').stop().fadeTo(200,0);
		}
	});

	$(".navtrue a").eq(0).click(function(event) {
		$("html,body").stop().animate({scrollTop:0},500)
	});

	
	$(".navtrue a").eq(1).click(function(event) {
		$("html,body").stop().animate({scrollTop:caseTop}, 500)
	});

	
	$(".navtrue a").eq(2).click(function(event) {
		$("html,body").stop().animate({scrollTop:serTop}, 500)
	});

	
	$(".navtrue a").eq(3).click(function(event) {
		$("html,body").stop().animate({scrollTop:aboutTop},500)
	});
	
	$(".navtrue a").eq(4).click(function(event) {
		
		$("html,body").stop().animate({scrollTop:contactTop},500)
	});
	/*---------------------banner轮播--------------------*/

	//左右箭头显示
	$("#banner").hover(function() {
		$("#jiantou_l").stop().animate({left:0}, 300);
		$("#jiantou_r").stop().animate({right:0}, 300)
	}, function() {
		$("#jiantou_l").stop().animate({left:"-52px"}, 300);
		$("#jiantou_r").stop().animate({right:"-52px"}, 300)
	});

	//图片轮播
	var widthNum=$(window).width();
	 $(".bannerin dl").css("width",widthNum);
	var key=0;
	var time=setInterval(autoplay,2000);	
	function autoplay(){
		key++;
		if(key>3){
			key=1;
			$(".bannerin").css("left",0);
		}
		
		$(".bannerin").stop().animate({left:-key*widthNum},1000);

	}

	$("#jiantou_r").click(function(event) {
		autoplay();
	});

	$("#jiantou_l").click(function(event) {
		key--;
		if (key<0) {
			key=2;

			$(".bannerin").css("left",-widthNum*3);
			
		};
		
		$(".bannerin").stop().animate({left: -key*widthNum},1000);
		
	});

	$("#banner").hover(function() {
		clearInterval(time);	
	}, function() {
		clearInterval(time);
		time=setInterval(autoplay,2000);
	});


	/*------------------案例切换------------------------*/

	$(".case_top li").click(function(event) {
		$(this).addClass('case_current').siblings("li").removeClass('case_current');
		$("#case_div #case_main").eq($(this).index()).show().siblings().hide();
	});

	/*------------------关于我们切换--------------------*/

	$(".about_div a").click(function(event) {
		$(this).addClass('cursor').siblings('a').removeClass('cursor');
		$("#about1_con .about1_con").eq($(this).index()).show().siblings().hide();
	});




	/*---------------------循环插图--------------------*/
	for (var i =1; i <=18; i++) {
		var serli=$("<li><img src= 'imgs/tg_clients_"+i+".gif' /></li>")
		$(".service_ad ul").prepend(serli)
		$(".service_ad li").css({
			width: '165px',
			height: '80px',
			cssFloat:'left',
			borderRight:'1px solid #EFEFF0',
			borderBottom:'1px solid #EFEFF0'
		});
	};
	
	/*-----------------Service-----------------*/

	$(".service_in").mouseenter(function(event) {
		$(this).children('#serv_l').stop().animate({left:0}, 400);
		$(this).children('#serv_r').stop().animate({right:0}, 400);
		$(this).children('#serv_bg').stop().fadeTo(400,1);
	}).mouseleave(function(event) {
		$(this).children('#serv_l').stop().animate({left: "-320px"}, 400);
		$(this).children('#serv_r').stop().animate({right: "-320px"}, 400);
		$(this).children('#serv_bg').stop().fadeTo(400,0);
	});




	/*-----------------图片淡入淡出特效-----------------*/
	$(".about_eye").mouseenter(function(event) {
		$(this).css('display','block').stop().fadeTo(200,0.8);
	}).mouseleave(function(event) {
		$(this).stop().fadeTo(300,0)
	});

	$(".cm_in").mouseenter(function(event) {
		$(this).children('.cm_ins').stop().animate({top:0}, 200);
	}).mouseleave(function(event) {
		$(this).children('.cm_ins').stop().animate({top:"-55px"}, 200)
	});


	/*-----------------表单-----------------*/
	$(".con_input input").focusin(function(event) {
		$(this).parent("div").css("border","1px solid #FD8200");
	}).focusout(function(event) {
		$(this).parent("div").css("border","1px solid #cccccc");
	});
	$(".con_input textarea").focusin(function(event) {
		$(this).css("border","1px solid #FD8200");
	}).focusout(function(event) {
		$(this).css("border","1px solid #cccccc");
	});

	/*-----------------回顶部-----------------*/
	
	$(window).scroll(function(e){
		var bTop=$(document).scrollTop();
		if (bTop>=1000) {
			$("#backTop").fadeIn();
		}else{
			$("#backTop").fadeOut();
		}
	});
	$("#backTop").click(function(event) {
		$("html,body").animate({scrollTop: 0}, 500)
	});
});


	

			
	
	

























