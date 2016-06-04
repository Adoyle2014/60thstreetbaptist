/**
 * Created by Adam on 6/2/2016.
 */

$(document).ready(function() {
    navbarChangeOnScroll();
    smoothScroll();

});


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