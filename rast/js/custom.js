(function($) {
  "use strict";
  jQuery(document).ready(function(){
	// Sticky menu
    jQuery(".sticky").sticky({
        topSpacing:0
    });
	// Testimonials
	var owl = $("#owl-testimonials");
    owl.owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 2],
            [1000, 2],
            [1200, 2],
            [1400, 2],
            [1600, 2]
        ],
        navigation : false
    });
	// site preloader -- also uncomment the div in the header and the css style for #preloader
    jQuery(window).load(function(){
        jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
    });
});
jQuery(function() {
	// Smooth Scroll
    jQuery('.page-scroll a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500,'easeInOutExpo');
                return false;
            }
        }
    });
	// Parallax
	jQuery.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
});
/** Portfolio **/
jQuery(window).load(function(){
    var jQuerycontainer = jQuery('#iso');
    jQuerycontainer.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 1
        }
    });
    jQuery('.portfolioFilter a').on('click',function(){
        jQuery('.portfolioFilter .current').removeClass('current');
        jQuery(this).addClass('current');
        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});
/********************** Pretty Photo.
 Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]">
 - For Single Image: <a data-rel="prettyPhoto">
 */
jQuery('a[data-rel]').each(function() {
    jQuery(this).attr('rel', jQuery(this).data('rel'));
});
jQuery("a[rel^='prettyPhoto']").prettyPhoto({
    theme:'dark_square',
    allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    default_width: 500,
    default_height: 344
});
/** Data Img Src **/
$( ".blog_bg" ).each(function() {
    var attr = $(this).attr('data-image-src');
    if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background', 'url('+attr+')');
    }
});
// Google Map
jQuery('#map').gmap3({
    marker:{
        latLng: [40.73009, -73.78085],
        options:{
            icon: "images/map-marker.png"
        }
    },
    map:{
        options:{
            zoom: 14,
            scrollwheel: false
        }
    }
});
})(jQuery);
/** Wow Animations **/
wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100
    }
);
wow.init();