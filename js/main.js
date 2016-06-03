/**
 * Created by Adam on 6/2/2016.
 */

$(document).ready(function() {
    navbarChangeOnScroll();


});

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