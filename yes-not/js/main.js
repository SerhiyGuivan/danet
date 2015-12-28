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
        if($('.bk-new-message').length){
            $('.message-info.new').colorbox({
                html: $('.bk-new-message'),
                width: '620px',
                closeButton: false,
            })
            $(document).bind('cbox_complete', function(){
                $('.bk-new-message .btn-reply').on('click', function(){
                    $('.buttons-wrap').hide();
                    $('.bk-new-message .form-reply-wrap').show();
                    $.colorbox.resize();
                })
            });
        }
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
        if( $('.bk-switch-payment').length){
            $('.bk-switch-payment').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-current-payment').length){
            $('.bk-switch-payment').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-requisites-info').length){
            $('.bk-switch-payment').jScrollPane({
                horizontalGutter: 0,
                verticalGutter: 0
            });
        }
        if( $('.bk-vip-description').length){
            $('.bk-vip-description').jScrollPane({
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
        //countdown 
        if($('.vip-countdown').length){
            var newYear = new Date(); 
            newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
            $('.vip-countdown').countdown({
                until: newYear, 
                format: 'HMS',                
                layout: '<span class="countdown-col"><span class="countdown-row"><span>{h10}</span><span>{h1}</span></span><span class="countdown-text">{hl}</span></span>' + ' <span class="divider">{sep}</span> ' +
                '<span class="countdown-col"><span class="countdown-row"><span>{m10}</span><span>{m1}</span></span><span class="countdown-text">{ml}</span></span>' + ' <span class="divider">{sep}</span> ' +
                '<span class="countdown-col"><span class="countdown-row"><span>{s10}</span><span>{s1}</span></span><span class="countdown-text">{sl}</span></span>'
            }); 
        }


    });
    $(window).load(function(){
        signUpComplete();
	});
})(jQuery);