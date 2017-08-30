;app.define('vendor/youtube', ['jquery'], function (jQuery) {
	var countElements = 0;
    var playerAPIReady = false;
    var playerqueue = [];
	var headerSticky = jQuery('.header-sticky');

    /**
      * These scoped globals will contain the global functions called by the Youtube API.
      */
    window.youtubePlayer = {};
    window.youtubePlayer.onYPReady = {};
    window.youtubePlayer.onYPStateChange = {};

    var DEFAULT_CONFIG = {
        autoplay: 0,
        controls: 1,
        height: '390',
        width: '640'
    };

    /**
     * Load the Youtube Iframe API into the DOM.
     */
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /**
     * Will let the module know that the Youtube API is loaded an ready to go.
     */
    window.onYouTubeIframeAPIReady = function () {
        playerAPIReady = true;
        if (playerqueue.length !== 0) {
            _resolveQueue();
        }
    };
    /**
     * Will resolve player requests that could not be created (Iframe API was not ready).
     */
    var _resolveQueue = function () {
        for (var i = 0; i < playerqueue.length; i++) {
            init(playerqueue[i].elm, playerqueue[i].options, playerqueue[i].appOptions);
        }
    };

    /**
     * @alias module:youtube player Module
     * @class YoutubePlayer
     * @constructor
     * @param {Object} jQuery elm
     * @param {Object} [options]
     */
    var YoutubePlayer =  function (elm, options, appOptions) {

    	appOptions = appOptions || {};

        var playerAPI = {};
        var config = {};
        var currentPlayer;
        var JElm;
        var $layer;
        var privacyLaw = 0;


		function getElementUID(el) {
			if (el.data('uid')) {
				return el.data('uid');
			} else {
				var uid = Math.round(new Date().getTime() + (Math.random() * 100));
				el.data('uid', uid);
				return uid;
			}
		}
    /**
     * Creates publish and subscribe functions for the player instance.
     */

        var _createPubsubFunctions = function(options) {
        	JElm = options.el ? options.el : jQuery('#' + options.elmId);
        	var uid = getElementUID(JElm);
        	$videoWrapper = JElm.closest('.video-center-wrapper');
        	if (appOptions.playInLayer) {
        		privacyLaw = jQuery('#mobile-privacy-law');
        		JElm.wrap('<div class="layer closed"><div class="layer-row"><div class="layer-cell"></div></div></div>');
        		$layer = JElm.closest('.layer');
        		$layer.append("<a href='#' class='close'>Close</a>", "<div class='overlay'></div>");
				$layer.on('click', '.close', function(e){
					e.preventDefault();
					playerAPI.stopVideo();
					var videWrapper = $layer.parent();
					if(videWrapper.hasClass('fromCarousel')) {
						playerAPI.destroy();
						var openedVideo = jQuery('.owl-item.openedVideo'); 
						openedVideo.parents('.owl-carousel').trigger('play.owl.autoplay');
						openedVideo.removeClass('openedVideo');
						videWrapper.remove();
					}
					if ($layer.hasClass('open')) {
						$layer.addClass("closed").removeClass('open');
						headerSticky.removeClass('hidden');
						privacyLaw.removeClass('hidden');
					};
					jQuery("html,body").css("overflow","visible");
				});
        	}

        	window.youtubePlayer.checkYTVideoState = function(player) {
        		if (currentPlayer === player){return true;}
        		else if(currentPlayer){
        			currentPlayer.stopVideo();
        			currentPlayer = player;
        		} else{
        			currentPlayer = player;
        		}
        		return true;
        	};
            window.youtubePlayer.onYPReady[uid] = function (event) {
            	if(jQuery(event.target.c).parents('.video-center-wrapper').hasClass('fromCarousel')) {
	            	event.target.playVideo();
	            } 
            	
            	JElm.on('play', function () {
            		event.target.playVideo();
				});

				JElm.on('stop', function () {
					event.target.stopVideo();
				});

				JElm.on('reset', function () {
					event.target.seekTo(0, true);
				});

				JElm.on('mute', function () {
					event.target.mute();
				});
				JElm.trigger('ready', event.target.getDuration() * 1000);
            };

            /**
             * event.data will return the following player states
             * -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
             */
            window.youtubePlayer.onYPStateChange[uid] = function (event) {
                var player = event.target,
                	trackingObj = {};

                if(!config.notracking) {
	                trackingObj = {
		    			video_category	: config.category,
		    			video_event		: '',
		    			video_length	: player.getDuration() - 1 + '',
						video_name		: player.getVideoData().title,
						video_player	: 'YOUTUBE',
						video_position	: ''
					};
					try {
						trackingObj.video_position = '' + Math.round(parseFloat(player.getCurrentTime()));
					} catch(ex) {
						trackingObj.video_position = '0';
					}
                }

				switch(event.data) {
					case YT.PlayerState.BUFFERING:		//  3
						trackingObj.video_event = 'video_buffering';
						if(!config.notracking) jQuery(document).trigger("analytics.video-action", trackingObj);
						jQuery(event.target.a).closest('.ytcontainer').find('.video-frame, .video-icon-wrapper').hide();
						jQuery(event.target.a).closest('.ytcontainer').find('.video-center-wrapper').css('z-index', '50');
						break;
					case YT.PlayerState.UNSTARTED: 		// -1
						if (player.open) {
							player.open = false;
							trackingObj.video_event = 'video_close';
							if(!config.notracking) jQuery(document).trigger("analytics.video-action", trackingObj);
						}
						if (appOptions.onChangeState) {
							appOptions.onChangeState.trigger('youtube.unstarted');
						}
						jQuery(event.target.a).closest('.ytcontainer').find('.video-frame, .video-icon-wrapper').show();
						if(app.isMobile){
							jQuery(event.target.a).closest('.ytcontainer').find('.video-center-wrapper').css('z-index', '-1');
						}
						break;
					case YT.PlayerState.PLAYING:	//  1
						if (appOptions.onChangeState) {
							appOptions.onChangeState.trigger('youtube.playing');
						}
						var playerBlock = jQuery(player.c);
						var $owl = playerBlock.parents('.owl-carousel');
						jQuery(event.target.a).closest('.ytcontainer').find('.video-frame, .video-icon-wrapper').hide();
						
						if($owl.length > 0) {
							$owl.trigger('stop.owl.autoplay');
							if (app.isMobile && /Android/i.test(navigator.userAgent) && $videoWrapper.length > 0) {
								event.target.stopVideo();
								
								var carousleItem = playerBlock.parents('.owl-item');
								carousleItem.addClass('openedVideo');

								var clonedEl = playerBlock.parents('.video-center-wrapper').clone().addClass('fromCarousel').empty();
								jQuery('body').append(clonedEl.append(playerAPI.l));
								
								_createPubsubFunctions({el:jQuery(playerAPI.l)});
								_startNewPlayer({el:jQuery(playerAPI.l)});
								
								var carouselIndex = carousleItem.children().data('carouselindex');
								if(carouselIndex) {
									$owl.trigger('to.owl.carousel',[carouselIndex, 1]);
								}
						    }
						}
						
						if(app.isMobile && $layer && $layer.parent().hasClass('fromCarousel')) {
							currentPlayer = null;
						}
						if (!player.open){
							player.open = true;
							if (youtubePlayer.checkYTVideoState(player)){

								trackingObj.video_event = 'video_start';
								if (appOptions.playInLayer) {
									headerSticky.addClass('hidden');
									privacyLaw.addClass('hidden');
								}
								JElm.trigger('video_start');
							}
						} else {
							if (youtubePlayer.checkYTVideoState(player)){
								trackingObj.video_event = 'video_play';
								if (appOptions.playInLayer) {
									headerSticky.addClass('hidden');
									privacyLaw.addClass('hidden');
								}
								JElm.trigger('video_play');
							}
						}

						if(!config.notracking) jQuery(document).trigger("analytics.video-action", trackingObj);
						if (appOptions.playInLayer) {
							if ($layer.hasClass('closed')) {
								$layer.addClass("open").removeClass('closed');
							};
							$("html,body").css("overflow", "hidden");
						}

						jQuery(event.target.a).closest('.ytcontainer').find('.video-center-wrapper').css('z-index', '50');
						break;

					case YT.PlayerState.ENDED:			//  0
						player.open = false;
						if (appOptions.onChangeState) {
							appOptions.onChangeState.trigger('youtube.ended');
						}
						trackingObj.video_event = 'video_complete';
						JElm.trigger('video_complete');
						if(!config.notracking) jQuery(document).trigger("analytics.video-action", trackingObj);
						if (appOptions.playInLayer) {
							if ($layer.hasClass('open')) {
								$layer.addClass("closed").removeClass('open');
								headerSticky.removeClass('hidden');
								privacyLaw.removeClass('hidden');
							};
							jQuery("html,body").css("overflow","visible");
						}
						var $owl = ($videoWrapper.hasClass('fromCarousel')) ? jQuery('.owl-item.openedVideo').parents('.owl-carousel') : $videoWrapper.parents('.owl-carousel');
						if($owl.length > 0) {
					        $owl.trigger('play.owl.autoplay');
					    }
						jQuery(event.target.a).closest('.ytcontainer').find('.video-frame, .video-icon-wrapper').show();
						if(app.isMobile){
							jQuery(event.target.a).closest('.ytcontainer').find('.video-center-wrapper').css('z-index', '-1');
						}
						break;

					case YT.PlayerState.PAUSED:			//  2
						if (appOptions.onChangeState) {
							appOptions.onChangeState.trigger('youtube.paused');
						}
						var $owl;
						if (youtubePlayer.checkYTVideoState(player)){
							trackingObj.video_event = 'video_stop';
//							trackingObj.video_event = 'video_pause';
							JElm.trigger('video_stop');
//							JElm.trigger('video_pause');
						}
						if(!config.notracking) jQuery(document).trigger("analytics.video-action", trackingObj);
						
						var $owl = $owl || $videoWrapper.parents('.owl-carousel');
						if($owl.length > 0 && !appOptions.playInLayer) {
					        $owl.trigger('play.owl.autoplay');
					    }
						if(app.isMobile && ($owl.length > 0)){
							jQuery(event.target.a).closest('.ytcontainer').find('.video-center-wrapper').css('z-index', '-1');
							jQuery(event.target.a).closest('.ytcontainer').find('.video-frame, .video-icon-wrapper').show();
						} else {
							jQuery(event.target.a).closest('.ytcontainer').find('.video-icon-wrapper').show();
						}
						break;
				}
            };

        };

        var _startNewPlayer = function (options) {
			var $elem = options.el ? options.el : jQuery('#' + options.elmId),
				uid = getElementUID($elem);
            playerAPI = new YT.Player($elem.get(0), {
                height: config.height,
                width: config.width,
                videoId: config.videoId,
                playerVars: {
                    autoplay: config.autoplay,
                    mute: config.mute,
                    controls: config.controls,
                    loop: config.loop,
                    iv_load_policy: config.iv_load_policy,
                    cc_load_policy: config.cc_load_policy,
                    modestbranding: config.modestbranding,
                    rel: config.rel,
                    showinfo: config.showinfo,
                    wmode: config.wmode,
                    disablekb: config.disablekb,
                    playlist: config.playlist
                },
                events: {
                    'onReady': youtubePlayer.onYPReady[uid],
                    'onStateChange': youtubePlayer.onYPStateChange[uid]
                }
            });
        };

        var init = function () {
            options.elmId = elm.id;
            options.el = ('el' in elm) ? elm.el : null;
            options.category = elm.category;
            config = jQuery.extend({}, DEFAULT_CONFIG, options);
            _createPubsubFunctions(options);
            _startNewPlayer(options);
        }();
    };


    /**
     * Factory method
     * @param {DOM Object} elm
     * @param {Object} [options]
     */
    var init = function (elm, options, appOptions) {
        if (playerAPIReady) {
            return new YoutubePlayer(elm, options, appOptions);
        } else {
            playerqueue.push({ elm: elm, options: options, appOptions: appOptions });
        }

    };

    /**
     * Module API
     * @public
     * @return {Object}
     */
    return {
        init: init
    }

});