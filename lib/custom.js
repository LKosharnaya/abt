(function($) {
    $(function() {
         $(".slider").slick({
             slidesToShow: 3,
             slidesToScroll: 1,
             autoplay: true,
             autoplaySpeed: 5000,
             dots: false,
             infinite: false,
             variableWidth: true,
             arrows: true,
             responsive: [
                 {breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                    },
                 {breakpoint: 800,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
                },
                {breakpoint: 680,
                    settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.to-top').fadeIn();
            } else {
                $('.to-top').fadeOut();
            }
        });
        $('.to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        $(".subscribe-form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: {
                    required: true,
                    minlength: 5
                }
            },
            submitHandler: function() {
                $('.modal').fadeIn();
            }
        });

        $('.modal .close').on('click', function () {
            $('.modal').fadeOut();
        });
        if($(window).width()<=668){
            $('.main-menu__list').on('click', function () {
                if($(".main-menu__el").css('display') == 'none'){
                    $(".main-menu__el").css('display', 'block')
                }else
                {
                    $(".main-menu__el").css('display', 'none')
                }
            });

        }
    });
})(jQuery);