(function($) {
    "use strict";

    $(window).on('load', function() {
        template.preloaderActivation();
        template.preloaderCancel();
    });

    /* Custom Functions */
    jQuery.fn.exists = function() {
        return this.length > 0;
    };

    var template = {

        /* Preloader Activation */
        preloaderActivation: function() {
            $('.tm-preloader').css({
                'transform': 'translateX(-100%)'
            });
            $('.tm-preloader svg').delay(150).fadeOut('slow');
        },
        preloaderCancel: function() {
            $('.tm-preloader').find('.tm-button').on('click', function() {
                $('.tm-preloader').css({
                    'transform': 'translateX(-100%)'
                });
                $('.tm-preloader').fadeOut('slow');
            });
        },
        /* Inline Background Image */
        dataBgImage: function() {
            $('[data-bgimage]').each(function() {
                var imageUrl = $(this).data('bgimage');
                $(this).css({
                    'background-image': 'url(' + imageUrl + ')'
                });
            });
        },

        /* Button Effect */
        buttonEffect: function() {
            $('.tm-button')
                .on('mouseenter', function(e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find('b').css({
                        top: relY,
                        left: relX
                    });
                })
                .on('mouseout', function(e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find('b').css({
                        top: relY,
                        left: relX
                    });
                });
            $('[href="#"]').click(function() {
                return false;
            });
        },

        /* Scroll To Section */
        scrollToSection: function() {
            $('a[href*="#"]:not([href="#"])').on('click', function(event) {
                event.preventDefault();
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 70)
                }, 1000);
            });
        },

        /* CounterUp Activation */
        counterupActivation: function() {
            if ($('.odometer').length) {
                $(window).on('scroll', function() {
                    function winScrollPosition() {
                        var scrollPos = $(window).scrollTop(),
                            winHeight = $(window).height();
                        var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
                        return scrollPosition;
                    }
                    var scrollPos = $(this).scrollTop();
                    var elemOffset = $('.odometer').offset().top;
                    var winHeight = $(window).height();

                    if (elemOffset < winScrollPosition()) {

                        $('.odometer').each(function() {
                            $(this).html($(this).data('count-to'));
                        });
                    }
                });
            }
        },

        /* Wowjs Activation */
        wowJsActive: function() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'tm-animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        },

        /* Scroll Up Active */
        scrollUpActive: function() {
            $.scrollUp({
                scrollName: 'scrollUp',
                topDistance: '500',
                topSpeed: 1500,
                animation: 'fade',
                animationInSpeed: 1000,
                animationOutSpeed: 1000,
                scrollText: '<i class="fa fa-angle-up"></i>',
                activeOverlay: false,
            });
        },

        /* Sticky Header */
        stickyHeader: function() {
            $(window).on('scroll', function() {
                var scrollPos = $(this).scrollTop();
                if (scrollPos > 0) {
                    $('.header').addClass('sticky-active');
                } else {
                    $('.header').removeClass('sticky-active');
                }
            });
        },

        demoNewbadge: function() {
            $('.tm-demoitem').each(function() {
                if ($(this).hasClass('tm-demoitem-new')) {
                    $(this).find('.tm-demoitem-image').append('<span class="newbadge">New</span>');
                }
            });
        },

        particleActive: function() {

            $('.particle-layer-1').particleground({
                dotColor: 'rgba(255,255,255, 0.25)',
                lineColor: 'rgba(255,255,255, 0.2)',
                minSpeedX: 0.3,
                maxSpeedX: 0.6,
                minSpeedY: 0.3,
                maxSpeedY: 0.6,
                density: 20000,
                curvedLines: false,
                proximity: 50,
                parallaxMultiplier: 10,
                particleRadius: 4,
            });

            $('.particle-layer-2').particleground({
                dotColor: 'rgba(255,255,255, 0.25)',
                lineColor: 'rgba(255,255,255, 0.2)',
                minSpeedX: 0.075,
                maxSpeedX: 0.15,
                minSpeedY: 0.075,
                maxSpeedY: 0.15,
                density: 20000,
                curvedLines: false,
                proximity: 20,
                parallaxMultiplier: 20,
                particleRadius: 2,
            });
        },

        /* Initializer */
        init: function() {
            template.dataBgImage();
            template.buttonEffect();
            template.scrollToSection();
            template.counterupActivation();
            template.wowJsActive();
            template.scrollUpActive();
            template.stickyHeader();
            template.demoNewbadge();
            template.particleActive();
        }
    };

    template.init();


})(jQuery);