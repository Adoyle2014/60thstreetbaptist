/**
 * Created by Adam on 6/2/2016.
 */
$(window).on('load resize', function() {
    var windowWidth = $(window).width();
    if(windowWidth > 768) {

        //Add Hover effect to menus
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        });
    } else {
        $('ul.nav li.dropdown').unbind('mouseenter mouseleave');
    }
});

$(document).ready(function() {
    navHover();
    navbarChangeOnScroll();
    smoothScroll();



});

var navHover = function() {

};

var smoothScroll = function() {
    $('a[href*="#"]')
        .bind('click', function(event) {
            var hash = this.hash.replace(/[#<>]/g, '')

            if (this.pathname === location.pathname) {
                event.preventDefault();
            }

            if (hash) {
                location.hash = '#/' + hash;
            }
        });

    $(window).bind('hashchange', function(event) {
        $.smoothScroll({
            scrollTarget: '#' + location.hash.replace(/^\#\/?/, '')
        });
    });
};

var navbarChangeOnScroll = function() {

    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        if(scrollPos > 0) {
            $("nav.navbar").addClass("navbar-scroll");
        } else {
            $("nav.navbar").removeClass("navbar-scroll");
        }
    });


};