(function($) {
	"use strict"; // Start of use strict
	

	/*Logo*/
	$('.har_logo_eq span').each(function(){
		 	var animated = $(this);
			function animate() {
		        animated.animate({
		            height: Math.floor(Math.random() * 100) + '%'
		        }, 350);
		    }
		    setInterval(animate, 350);
	});

		/*Firefly*/
		if ($('.har_firefly').length>0) {
			$('.har_firefly').each(function(){
				var total = $(this).attr('data-total');
				var minPixel = $(this).attr('data-minPixel');
				var maxPixel = $(this).attr('data-maxPixel');
				$.firefly({
				  minPixel: minPixel,
	       	maxPixel: maxPixel,
					color: 'none',
					total : total,
					on:'.har_firefly'
				});
			});
			

		};


	/* Logo Lettering */
	if ($("#har_text_animation .har_studio_animation").length>0)
	$("#har_text_animation .har_studio_animation").lettering();
	$("#har_text_animation .har_studio_animation span").each(function(){
	var min = 0;
	var max = 50;
	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	$(this).css('transition-delay', '0.'+randomNumber+'s');
	});

	/*Countdown*/
	$('.har_countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});

	/*CountTo*/
	$('.har_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })
    $('.date_picker').datepicker();

    /*RSVP Form*/
    $(".har_form").validate({
	  submitHandler: function(form) {
	  	var type = $(form).attr('id');
	    send_form(type);
		return false;
	  }
	 });
	
	function send_form(type){
	  var arr = [];
	  $("#"+type+" .form-control").each(function(){

	          var element = $(this).attr('name');
	          var value = $(this).val();
	          $(this).css({border:"1px solid #c4c4c4"});
	          if($(this).prop('required') && value =="") {
	                  $(this).css({border:"2px solid red"});
	                  $(this).focus();
	                  return false;
	          }
	          if (!value == '') {
	                  arr.push('&'+element+'='+value);
	          }
	  })


	  var dataString = (arr.join (' '));
	  $.ajax({
	          method: "POST",
	          url: "https://formspree.io/verothemes@gmail.com",
	          data: dataString,
	          dataType: "json",
	          success: function() {
	                  $("#"+type).html("<div id='form_send_message'>Thank you for your request, we will contact you as soon as possible.</div>", 1500);
	          }
	  });


	}

    /*Gallery Lightbox*/
	$('.lightbox').magnificPopup({ 
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
	$('.video').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; } 

		      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
		    },
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '/',
		      src: 'http://player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      index: '//maps.google.',
		      src: '%id%&output=embed'
		    }

		    // you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}  
	  
	});

	/*Instafeed*/
		if ($('#instagram-carousel').length>0) {
			var feed = new Instafeed({
        get: 'user',
        userId: 3239125850,
        accessToken: '3239125850.1677ed0.9918d505e9e64906b6db646380e9c61c',
        sortBy: 'most-liked',
        template: '<a href="{{link}}" target="_blank" class="har_insta_item"><img class="img-responsive" src="{{image}}" /></a>',
        target: 'instagram-carousel',
        limit: 9,
        resolution: 'standard_resolution',
        after: function () {
            $('#instagram-carousel').owlCarousel({
                items: 5,
                navigation: false,
                pagination: false,
                autoPlay: 4000,
                loop:true
            });
        }

    	});
  		feed.run();
		}
  	
	
	/*OWL Intro Slider*/
	$(".har_slider_carousel").owlCarousel({
 		navigation : true, 
 		pagination: false,
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 300, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 300,
		items: 1,
		autoPlay : 8000, 
		touchDrag:false,
		singleItem:true,
		transitionStyle: 'fade',
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

    /*OWL Team*/
	$(".har_team_slider").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		addClassActive:true,
		items:3,
		itemsTablet:[1200,2],
		itemsMobile : [700,1],
		itemsDesktop:3,
		autoPlay : false, 
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/*OWL Double*/
	$(".har_db_slider").owlCarousel({
 		navigation : false, 
 		responsive: true, 
 		addClassActive:true,
		items:2,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:2,
		autoPlay : true, 
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/* OWL Team Single*/
	$(".har_team_slider_single").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		addClassActive:true,
		items:1,
		autoPlay : true, 
		singleItem:true,
		autoHeight : true,
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});


	/*OWL Carousel in Shop Item*/

		$(".har_shop_item_slider").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		addClassActive:true,
			items:1,
			itemsTablet:[1000,2],
			itemsMobile : [700,1],
			itemsDesktop:1,
			autoPlay : true, 
			touchDrag:false, 
			navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
		});


	/* Twitter Feed */

       $('.tweets-feed').each(function(index) {
           jQuery(this).attr('id', 'tweets-' + index);
       }).each(function(index) {
           
           var TweetConfig = {
               "id": jQuery('#tweets-' + index).attr('data-widget-id'),
               "domId": '',
               "maxTweets": 3,
               "enableLinks": true,
               "showUser": true,
               "showTime": true,
               "dateFunction": '',
               "showRetweet": false,
               "customCallback": handleTweets
           };
           function handleTweets(tweets) {
               var x = tweets.length;
               var n = 0;
               var element = document.getElementById('tweets-' + index);
               var html = '<ul class="slides">';
               while (n < x) {
                   html += '<li>' + tweets[n] + '</li>';
                   n++;
               }
               html += '</ul>';
               element.innerHTML = html;
               return html;
           }
           twitterFetcher.fetch(TweetConfig);
       });

	

	/* Section Background */
	$('.har_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (blend){
			$(this).css('background-blend-mode', blend);	
		}
		if (position){
			$(this).css('background-position', position);	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (height){
			$(this).css('height', height);	
		}

	});

// Particles
	if ($('.har_particles').length>0) {
		$('.har_particles').particleground( {
			   dotColor: '#fff',
		    lineColor: '#fff',
		    particleRadius: '3',
		    lineWidth: '0.5'

			});
		};
	/*Youtube Player*/

	if ($('#bgndVideo').length>0) {
			$('#bgndVideo').YTPlayer();
		};
      

	/* Over */
	$('.har_over, .har_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		if (color){
			$(this).css('background-color', color);	
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);	
		}
	});

	/* Map */
	$('.har_accordion_location').on("click", function(e){
		e.preventDefault();
		$('.har_accordion_map').slideToggle(200);
	});

	/* Map Studio*/
	$('.har_map_over').on("click", function(e){
		$(this).parents('.har_section').toggleClass('active_map');
	});

	/* Mobile Menu */
	$('.har_top_menu_mobile_link').on("click", function(e){
		$(this).next('.har_top_menu_cont').fadeToggle();
		$(this).parents('.har_light_nav').toggleClass('active');
	});



	/*Scroll Effect*/
	$('.har_go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300);
		e.preventDefault();
	});

	/*Animation Block Delay*/
	
	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;	
		$(this).find('.har_icon_box, .har_news_block,  .har_service_block, .skill-bar-content, .har_anim_box, .har_portfolio_item_poloroid, .panel-default').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('#qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});

	/* Shortcode Nav */
	var top_offset = $('header').height() - 1; 

	$('#nav-sidebar').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 700,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	

	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".har_logo").addClass('active');
			$('body').addClass('har_first_step');
			
		}
		else {
			$('body').removeClass('har_first_step');
			$(".har_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('har_second_step');
		}
		else {
			$('body').removeClass('har_second_step');
		}
	});

	/* Fixed for Parallax */
	$(".har_fixed").css("background-attachment","fixed");


	/* Submenu */
 	$('.har_parent').on({
		mouseenter:function(){
			$(this).find('ul').stop().fadeIn(300);
		},mouseleave:function(){
			$(this).find('ul').stop().fadeOut(300);
		}
	});

 	/* Mobile Menu */

	$('.har_mobile_menu_content .har_parent').on("click", function(e){
		$(this).find('ul').slideToggle(300);
	});
	$('.har_mobile_menu').on("click", function(e){
		$(this).toggleClass('active');
		$('.har_mobile_menu_hor').toggleClass('active');
	});

	$('.har_header_search').on({
		mouseenter:function(){
			$(this).find('.har_header_search_cont, .har_header_basket_cont').stop().fadeToggle();
		},mouseleave:function(){
			$(this).find('.har_header_search_cont, .har_header_basket_cont').stop().fadeToggle();
		}
	});

	/* Top Menu Click to Section */
	$('.har_top_menu_cont a[href*=\\#]:not([href=\\#])').on("click", function(){
		$(".har_mobile_menu").trigger('click');
		$('.har_top_menu_cont a[href*=\\#]:not([href=\\#])').removeClass('active');
		$(this).addClass('active');
		
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});


	/* Block Autheight */
	if( !device.tablet() && !device.mobile() ) {
		$('.har_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"]'));
		});
	}
	if( device.tablet() && device.landscape() ) {
		$('.har_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"]'));
		});
	}

	$(window).resize(function() {
		if( !device.tablet() && !device.mobile() ) {
			$('.har_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.har_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"]'));
			});
		}
	});

	/*Boxes AutoHeight*/
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				$(this).css('height','auto');
				var currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
					{
					tallestcolumn = currentHeight;
					}
			}
		);
	columns.height(tallestcolumn);
	}

	/*Player*/
jQuery('.trak-item audio').attr('data-state','pause');

var pauseIf,
    jPlayerPausePlay = 'pause';
jQuery("#jquery_jplayer_main").jPlayer({
    ready: function () {

        if ( jQuery('.playlist-wrapper .jp-playlist .trak-item').length > 0 ) {

            var $this = jQuery('.playlist-wrapper .jp-playlist .about-list').next(),
                audioSrc = $this.data('audio'),
                audioTitle = $this.find('audio').attr('title'),
                audioThumb = $this.data('thumbnail'),
                audioArtist = $this.data('artist');

            jQuery('.jp-audio-main .har-artist').text(audioArtist);

            jQuery('.jp-audio-main .har-thumbnail img').attr('src',audioThumb);

            $this.addClass('active');

            $this.find('audio').attr('data-state','pause');

            jQuery('.jp-jplayer').attr({
                'data-state':'pause',
                'data-audio-src':audioSrc
            });

            jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                title: audioTitle,
                m4a: audioSrc
            });


        }

    },
    swfPath: '../dist/jplayer',
    solution: 'html, flash',
    supplied: 'm4a, oga',
    preload: 'metadata',
    volume: 0.8,
    muted: false,
    backgroundColor: '#000000',
    cssSelectorAncestor: '#jp_container_content',
    cssSelector: {
        play: '.har-play',
        pause: '.har-pause',
        // stop: '.jp-stop',
        seekBar: '.har-seek-bar',
        playBar: '.har-seek-bar > div',
        mute: '.har-mute',
        unmute: '.har-unmute',
        volumeBar: '.har-volume-bar',
        volumeBarValue: '.har-volume-bar-value',
        // volumeMax: '.jp-volume-max',
        // playbackRateBar: '.jp-playback-rate-bar',
        // playbackRateBarValue: '.jp-playback-rate-bar-value',
        currentTime: '.har-current-time',
        duration: '.har-duration',
        title: '.har-title',
        // fullScreen: '.jp-full-screen',
        // restoreScreen: '.jp-restore-screen',
        // repeat: '.jp-repeat',
        // repeatOff: '.jp-repeat-off',
        // gui: '.jp-gui',
        // noSolution: '.jp-no-solution'
    },
    errorAlerts: true,
    warningAlerts: false,
    ended: function() {

       var playingSongParent = jQuery('.trak-item.active');


        if ( playingSongParent.next().length > 0 ) {

            var parentForFind = playingSongParent.next(),
                songTitle = parentForFind.find('audio').attr('title'),
                songSrc = parentForFind.data('audio'),
                soundThumb = parentForFind.data('thumbnail'),
                audioArtist = parentForFind.data('artist'),
                jPlayerPausePlay = jQuery('.jp-jplayer').attr('data-state');

            jQuery('.jp-audio-main .har-artist').text(audioArtist);

            jQuery('.trak-item').removeClass('active playing');

            parentForFind.addClass('active playing');

            jQuery('.har-thumbnail img').attr('src',soundThumb);

            jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                title: songTitle,
                m4a: songSrc
            }).jPlayer("play");

            parentForFind.find('audio').attr('data-state','play');

            jQuery('.jp-jplayer').attr({
                'data-state':'play',
                'data-audio-src':songSrc
            });


        } else {

            playingSongParent.removeClass('playing');

            playingSongParent.find('audio').attr('data-state','pause');

        };

    },
    play: function() {

        jQuery('.trak-item.active').addClass('playing');

        jQuery('.trak-item.active').find('audio').attr('data-state','play');

        jQuery('.jp-jplayer').attr('data-state','play');

    },
    pause: function() {

        jQuery('.trak-item.active').removeClass('playing');

        jQuery('.trak-item.active').find('audio').attr('data-state','pause');

        jQuery('.jp-jplayer').attr('data-state','pause');

    }
});

var playerPlayOne = {

    init: function(){

        jQuery('.trak-item .play-pause-button').on('click',function(){  
         
            if ( jQuery(this).parent().hasClass('active') ) {} else {

                jQuery('.trak-item').removeClass('active playing');
                jQuery('.trak-item audio').data('state','pause');
                jQuery('.jp-jplayer').attr('data-state','pause');

            }

            var parentForFind = jQuery(this).parent(),
                songTitle = parentForFind.find('audio').attr('title'),
                songSrc = parentForFind.data('audio'),
                soundThumb = parentForFind.data('thumbnail'),
                autioArtist = parentForFind.data('artist'),
                findItemByTitlteClick = jQuery('.trak-item.active[data-audio="' + songSrc + '"][data-artist="' + audioArtist + '"][data-thumbnail="' + soundThumb + '"]'),
                jPlayerPausePlay = jQuery(this).parent().find('audio').attr('data-state'),
                pauseIf = jQuery('.jp-jplayer').attr('data-audio-src');

            if ( pauseIf == songSrc ) {

                if ( jPlayerPausePlay == 'play' ) {

                    if ( parentForFind.hasClass('active') ) {

                        jQuery("#jquery_jplayer_main").jPlayer("pause");

                        parentForFind.removeClass('playing');

                        parentForFind.find('audio').attr('data-state','pause');

                        jQuery('.jp-jplayer').attr('data-state','pause');

                        findItemByTitlteClick.addClass('active');
                        findItemByTitlteClick.removeClass('playing');

                    } else {

                        jQuery('.trak-item').removeClass('active playing');

                        parentForFind.addClass('active playing');

                        var audioArtist = parentForFind.data('artist');

                        jQuery('.jp-audio-main .har-artist').text(audioArtist);

                        jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                            title: songTitle,
                            m4a: songSrc
                        }).jPlayer("play");

                        parentForFind.find('audio').attr('data-state','play');

                        jQuery('.jp-jplayer').attr({
                            'data-state':'play',
                            'data-audio-src':songSrc
                        });

                        findItemByTitlteClick.addClass('active playing');

                        var playingSongParent = jQuery('.trak-item.active'),
                            soundThumb = parentForFind.data('thumbnail');

                        jQuery('.har-thumbnail img').attr('src',soundThumb);

                    }

                } else if ( jPlayerPausePlay == 'pause' ) {

                    if ( parentForFind.hasClass('active') ) {

                        jQuery("#jquery_jplayer_main").jPlayer("play");

                        parentForFind.addClass('playing');

                        parentForFind.find('audio').attr('data-state','play');

                        jQuery('.jp-jplayer').attr('data-state','play');

                        findItemByTitlteClick.addClass('active playing');

                    } else {

                        jQuery('.trak-item').removeClass('active playing');

                        parentForFind.addClass('active playing');

                        var audioArtist = parentForFind.data('artist');

                        jQuery('.jp-audio-main .har-artist').text(audioArtist);

                        jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                            title: songTitle,
                            m4a: songSrc
                        }).jPlayer("play");

                        parentForFind.find('audio').attr('data-state','play');

                        jQuery('.jp-jplayer').attr({
                            'data-state':'play',
                            'data-audio-src':songSrc
                        });

                        findItemByTitlteClick.addClass('active playing');

                        var playingSongParent = jQuery('.trak-item.active'),
                            soundThumb = parentForFind.data('thumbnail');

                        jQuery('.har-thumbnail img').attr('src',soundThumb);

                    }

                };

            } else {

                jQuery('.trak-item').removeClass('active playing');

                parentForFind.addClass('active playing');

                var audioArtist = parentForFind.data('artist');

                jQuery('.jp-audio-main .har-artist').text(audioArtist);

                jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                    title: songTitle,
                    m4a: songSrc
                }).jPlayer("play");

                parentForFind.find('audio').attr('data-state','play');

                jQuery('.jp-jplayer').attr({
                    'data-state':'play',
                    'data-audio-src':songSrc
                });

                findItemByTitlteClick.addClass('active playing');

                var playingSongParent = jQuery('.trak-item.active'),
                    soundThumb = parentForFind.data('thumbnail');

                jQuery('.har-thumbnail img').attr('src',soundThumb);

            };

        });

    },

    playPrevSong: function(){

        jQuery('.har-prev').on('click',function(){

            var playingSongParent = jQuery('.trak-item.active');

            if ( playingSongParent.prev().length > 0 ) {

                var parentForFind = playingSongParent.prev(),
                    songTitle = parentForFind.find('audio').attr('title'),
                    songSrc = parentForFind.data('audio'),
                    soundThumb = parentForFind.data('thumbnail'),
                    audioArtist = parentForFind.data('artist'),
                    jPlayerPausePlay = jQuery('.jp-jplayer').attr('data-state');

                jQuery('.jp-audio-main .har-artist').text(audioArtist);

                jQuery('.trak-item').removeClass('active playing');

                parentForFind.addClass('active playing');

                jQuery('.har-thumbnail img').attr('src',soundThumb);

                jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                    title: songTitle,
                    m4a: songSrc
                }).jPlayer("play");

                parentForFind.find('audio').attr('data-state','play');

                jQuery('.jp-jplayer').attr({
                    'data-state':'play',
                    'data-audio-src':songSrc
                });

            };

        });

    },

    playNextSong: function(){

        jQuery('.har-next').on('click',function(){

            var playingSongParent = jQuery('.trak-item.active');

            if ( playingSongParent.next().length > 0 ) {

                var parentForFind = playingSongParent.next(),
                    songTitle = parentForFind.find('audio').attr('title'),
                    songSrc = parentForFind.data('audio'),
                    soundThumb = parentForFind.data('thumbnail'),
                    audioArtist = parentForFind.data('artist'),
                    jPlayerPausePlay = jQuery('.jp-jplayer').attr('data-state');

                jQuery('.jp-audio-main .har-artist').text(audioArtist);

                jQuery('.trak-item').removeClass('active playing');

                parentForFind.addClass('active playing');

                jQuery('.har-thumbnail img').attr('src',soundThumb);

                jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                    title: songTitle,
                    m4a: songSrc
                }).jPlayer("play");

                parentForFind.find('audio').attr('data-state','play');

                jQuery('.jp-jplayer').attr({
                    'data-state':'play',
                    'data-audio-src':songSrc
                });

            };

        });

    }

}
jQuery(document).ready(function(){

    playerPlayOne.init();
    playerPlayOne.playPrevSong();
    playerPlayOne.playNextSong();
});


	// Open Close PlayList
    $('#playlist-toggle').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('.playlist-wrapper').toggleClass('300').fadeToggle(300);
    });
	
})(jQuery);



$(window).load(function(){

	$(".har_preloader").fadeOut("slow");

	// Page loader
        
    $("body").imagesLoaded(function(){
        $(".har_page_loader div").fadeOut();
    	$(".har_page_loader").delay(200).fadeOut("slow");
    });


	/*SkroolR*/
	if( !device.tablet() && !device.mobile() ) {
		var s = skrollr.init({
			forceHeight: false,
		});
		$(window).stellar({
		 	horizontalScrolling: false,
			responsive: true,
	 	});
	}

 	/*Masonry*/

	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-item'
	  }	  
	});
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	$(window).resize(function(){
	  $grid.isotope('layout');
	});



	$('.masonry').masonry({
		itemSelector: '.masonry-item',
	});

	$('.filter-button-group').on( 'click', 'a', function() {
		$(this).parents('.filter-button-group').find('a').removeClass('active');
		$(this).addClass('active');
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
	
});

