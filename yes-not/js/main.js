(function($) {
	function signUpComplete(){
		if( $('.bk-sign-up-complete').length ){
	    	$.colorbox({
	    		html: $('.bk-sign-up-complete'),
	    		width: '430px',
	    		closeButton: false,
	    	});
		}
	};
    $(document).ready(function(){
    	//colorbox
        if( $('.lost-pass').length ){
	 		$('.lost-pass').colorbox({
	 			html: $('.bk-pass-recovery'),
	 			width: '420px',
	 			closeButton: false,
	 		});
    	};
    	if( $('.btn-play').length ){
    		$('.btn-play').colorbox({
    			html: $('.bk-game-type'),
    			width: '350px',
    			closeButton: false,
    		});	
    	};
    	if( $('.btn-sign-up').length ){
    		$('.btn-sign-up').colorbox({
    			html: $('.bk-sign-up'),
    			width: '390px',
    			closeButton: false,
    		});		
    	};

        //jScrollPane
    	if( $('.bk-support').length){
    		$('.bk-support').jScrollPane({
    			horizontalGutter: 0,
    			verticalGutter: 0
    		});
    	}
        if( $('.bk-rules').length){
            $('.bk-rules').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-news').length){
            $('.bk-news').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-ref').length){
            $('.bk-ref').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-activity').length){
            $('.bk-activity').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-reverse-money').length){
            $('.bk-reverse-money').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-hand-replenishment').length){
            $('.bk-hand-replenishment').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-auto-replenishment').length){
            $('.bk-auto-replenishment').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        //selectmenu
    	if( $('.form-select').length ){
    		$('.form-select').selectmenu({
    			width: '252px'
    		});
    	}
        //radios
        if( $('.form-select-rate-wrap').length){
            $('.form-radios-select-rate').buttonset();
            $('.form-radio[name=select-rate]').on('change', function(){
               $('.user-choice').text('Вы выбрали ставку ' + $(this).val()); 
            })
        }

    });
    $(window).load(function(){
    	signUpComplete();
	});
})(jQuery);