$(document).ready(function () {

	    scaleVideoContainer();

	    initBannerVideoSize('.video-container .poster img');
	    initBannerVideoSize('.video-container .filter');
	    initBannerVideoSize('.video-container video');

	    $(window).on('resize', function() {
	        scaleVideoContainer();
	        scaleBannerVideoSize('.video-container .poster img');
	        scaleBannerVideoSize('.video-container .filter');
	        scaleBannerVideoSize('.video-container video');
	    });



	function scaleVideoContainer() {

	    var height = $(window).height() + 5;
	    var unitHeight = parseInt(height) + 'px';
	    $('.homepage-hero-module').css('height',unitHeight);

	}

	function initBannerVideoSize(element){

	    $(element).each(function(){
	        $(this).data('height', $(this).height());
	        $(this).data('width', $(this).width());
	    });

	    scaleBannerVideoSize(element);

	}

	function scaleBannerVideoSize(element){

	    var windowWidth = $(window).width(),
	    windowHeight = $(window).height() + 5,
	    videoWidth,
	    videoHeight;

	    // console.log(windowHeight);

	    $(element).each(function(){
	        var videoAspectRatio = $(this).data('height')/$(this).data('width');

	        $(this).width(windowWidth);

	        if(windowWidth < 1000){
	            videoHeight = windowHeight;
	            videoWidth = videoHeight / videoAspectRatio;
	            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

	            $(this).width(videoWidth).height(videoHeight);
	        }

	        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	    });
	}



	$("a[rel='colorbox']").colorbox({
		maxWidth: "100%",
		maxHeight: "100%",
		opacity: ".9"
	});

	// Logo
	var $logo = $('#logo');
	if (location.href.indexOf("#") != -1) {
		if (location.href.substr(location.href.indexOf("#")) != '#about') {
			$logo.show();
		}
	}

	// Show logo
	$('#tab-container .tab a').click(function () {
		$logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function () {
		$logo.slideUp('slow');
	});

	function animMeter() {
		$(".meter > span").each(function () {
			$(this)
				.data("origWidth", $(this).width())
				.width(0)
				.animate({
					width: $(this).data("origWidth")
				}, 1200);
		});
	}
	animMeter();

	$('#tab-container').easytabs({
		animate: true,
		updateHash: true,
		transitionIn: 'slideDown',
		transitionOut: 'slideUp',
		animationSpeed: 600,
		tabActiveClass: 'active'
	}).bind('easytabs:midTransition', function (event, $clicked, $targetPanel) {
		if ($targetPanel.selector == '#resume') {
			animMeter();
		}
	});


	//toTop
	if (jQuery().UItoTop) {
		jQuery().UItoTop({ easingType: 'easeOutQuart' });
	}


	function thumbGallerySetupDone() {
		//function called when component is ready to receive public function calls
		//console.log('thumbGallerySetupDone');
	}

	function detailActivated() {
		//function called when prettyphoto is opened
		//console.log('detailActivated');
	}

	function detailClosed() {
		//function called when prettyphoto is closed
		//console.log('detailClosed');
	}

	function overThumb(i, j) {
		//function called when mouse over thumb holder (plus returned item number: i = first level, j = second level)
		//console.log('overThumb: ', i,' , ', j);
	}

	function outThumb(i, j) {
		//function called when mouse out thumb holder (plus returned item number: i = first level, j = second level)
		//console.log('outThumb: ', i,' , ', j);
	}


	$('#componentWrapper').thumbGallery({
		/* GENERAL */
		/*layoutType: grid/line */
		layoutType: 'grid',
		/*thumbOrientation: horizontal/vertical */
		thumbOrientation: 'horizontal',
		/*moveType: scroll/buttons */
		moveType: 'scroll',
		/*scrollOffset: how much to move scrollbar and scrolltrack off the content (enter 0 or above) */
		scrollOffset: 25,

		/* GRID SETTINGS */
		/*verticalSpacing:  */
		verticalSpacing: 18,
		/*horizontalSpacing:  */
		horizontalSpacing: 25,
		/*buttonSpacing: button spacing from the grid itself */
		buttonSpacing: 10,
		/*direction: left2right/top2bottom (direction in which boxes are listed) */
		direction: 'left2right',

		/* INNER SLIDESHOW */
		/*innerSlideshowDelay: slideshow delay for inner items in seconds, random value between: 'min, max',
				enter both number the same for equal time delay like for example 2 seconds: '2,2' */
		innerSlideshowDelay: [2, 4],
		/*innerSlideshowOn: autoplay inner slideshow, true/false */
		innerSlideshowOn: false
	});

	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		theme: 'pp_default',
		deeplinking: true,
		callback: function () {
			detailClosed();
		}
	});

		$(function() {
	    	$('.chart').easyPieChart({
	      		easing: 'easeOutBounce'
	    });
	    var chart = window.chart = $('.chart').data('easyPieChart');
		});

});



