	jQuery(document).ready(function(){
		/*
			footer영역 패밀리사이트 클릭하면
			목록 위로 슬라이드 올라오기

			대상: footer .family_site ul
			이벤트: 클릭
			이벤트 핸들러: 클릭하면 slide로 ul li 모습 보여짐

			#footer	.footer_family{width:786px;height:100%;float:left;}
			#footer	.footer_family_a{width:150px;display:block;float:left;}
			#footer .family_site{width:150px;float:left;}
			#footer .family_site button{border:1px solid #fff;background-color:#fff;}
			#footer .family_site ul{width:200px;height:100px;display:none;
				background-color:#666;overflow:auto;
				}
			#footer .family_site ul li{padding:5px 0;}
			#footer .family_site ul li a{color:#aaa;}
			#footer .family_site:hover ul{display:block;}
			/*##### 기능 #####*/
		/*
			
		*/
	
		jQuery(".family_site p").click(function(){		
			jQuery(".family_site ul li").slideToggle();	
		});			
	});
