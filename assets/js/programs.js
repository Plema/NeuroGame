$(document).ready(function(){

    $('.filter li a').on('click', function(){
        // var filterItem = $(this).text();
        // $(this).parents('ul').siblings('.item').find('p').text(filterItem);
    });

    $('.favorites-link').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.product-nav').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product-for',
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
    });
    
    $('.product-for').slick({
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-nav'
    });

    $('.programs-slider').each(function() {
        $(this).slick({
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

    
    
});