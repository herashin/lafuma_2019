	jQuery(document).ready(function(){
		jQuery(".product").hover(function(){/* product의 호버 기능*/
				jQuery("#headerWrap").css({"height":"320px"});			
			},function(){
				jQuery("#headerWrap").css({"height":"115px"});			
			});

			jQuery(".lafuma,.lookbook").hover(function(){/* lafuma,lookbook의 호버 기능*/
				jQuery("#headerWrap").css({"height":"200px"});			
			},function(){
				jQuery("#headerWrap").css({"height":"115px"});			
			});		
			
			jQuery(".store").hover(function(){/* store의 호버 기능*/
				jQuery("#headerWrap").css({"height":"165px"});			
			},function(){
				jQuery("#headerWrap").css({"height":"115px"});			
			});
		jQuery("#headerWrap").css({"transition":"all 0.3s"});
	});