$(document).ready(function(){

    $('.header-bg').height( $('.header').height() + $('.banner').height() );

    $('.why-we-slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    $('.why-we-item h5').matchHeight({
        byRow: false
    }); 

    $('.why-we-item .img').matchHeight({
        byRow: false
    }); 

    $('.why-we-item .text').matchHeight({
        byRow: false
    }); 

    if($(window).width() > 660){

        $('.why-we-slider').slick('unslick');

    }

    if($(window).width() < 768){

        $(".programs-nav").mCustomScrollbar({
            axis:"x" 
        });

    }

    $('.programs-nav li').on('click', function(){
        var dataProgram = $(this).data('programs');
        $('.programs-nav li').removeClass('active');
        $('.sliders').removeClass('active');
        $(this).addClass('active');
        $('.' + dataProgram).addClass('active');
        $('.programs-slider').each(function(){
            $(this).get(0).slick.setPosition();    
        });
    });

    $('.programs-slider').each(function() {
        $(this).slick({
            rows: 2,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            nextArrow: '<button class="slick-arrow next"><i class="icon-left-arrow"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-angle-left"></i></button>',
            appendDots: $(this).siblings('.slider-nav'),
            appendArrows: $(this).siblings('.slider-nav'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ] 
        });
    });

    $('.favorites-link').on('click', function(){
        $(this).toggleClass('active');
    });



});

$(window).resize(function(){

    if($(window).width() < 660){

        $('.why-we-slider').slick({
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true
        });        

    }

    if($(window).width() > 660){

        $('.why-we-slider').slick('unslick');

    }

    $('.header-bg').height( $('.header').height() + $('.banner').height() );
    
});