$(document).ready(function(){
		$("#btn1").click(function(){
			$("div").slideUp(500,"linear",function(){ alert("슬라이드 업 성공!"); });
		});

		$("#btn2").click(function(){
			$("div").slideDown(700,"swing",function(){ alert("슬라이드 다운 성공!"); });
		});

		$("#btn3").click(function(){
			$("img").delay(1000).fadeTo(500,"0.5");
			$(".textArea").fadeTo(500,"0.5").css({"color":"red"});
		});

		$("#btn4").click(function(){
			$("img").fadeTo(500,1);
			$(".textArea").fadeTo(500,1).css({"textAlign":"center","padding":"20px 0","fontSize":"20px"});
		});
	
	});

	/*
		[주의사항]

		:: 클릭이 되는 부분의 대상은 id명으로 만들었기 때문에
		대상의 이름에 주의하기!

		+ 버튼1: 어떤 기능 제공? slideUp 제공!
		+ 버튼2: 어떤 기능 제공?
		.....

		버튼 6까지 어떤 기능을 제공하고 어떻게 사용하는지 
		상세히 작성하여 사용자가 사용할수 있도록 표기한다!
	
	*/