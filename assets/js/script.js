$(document).ready(function(){

    $('.open-menu').on('click', function(){
        $('.mobile-menu').fadeIn();
    });

    $('.check_js').on('click', function(){
        $('.check').fadeIn();
        $('.entrance').fadeOut();
    });

    $('.support_js').on('click', function(){
        $('.support').fadeIn();
        $('.check').fadeOut();
        $('.entrance').fadeOut();
    });

    $('.entrance_js').on('click', function(){
        $('.check').fadeOut();
        $('.entrance').fadeIn();
        $('.mobile-menu').fadeOut();
    });

    $('.forgot_js').on('click', function(){
        $('.forgot-popup').fadeIn();
        $('.entrance').fadeOut();
    });

    $('.close-menu').on('click', function(){
        $('.mobile-menu').fadeOut();
    });

    $('.close').on('click', function(){
        $('.mobile-menu').fadeOut();
        $('.check').fadeOut();
        $('.entrance').fadeOut();
        $('.forgot-popup').fadeOut();
        $('.support').fadeOut();
    });

    $('.close-popup').on('click', function(){
        $('.check').fadeOut();
        $('.entrance').fadeOut();
        $('.forgot-popup').fadeOut();
        $('.support').fadeOut();
    });

    $('.mobile-menu ul li ul').parent().addClass('drop');
    $('.mobile-menu .drop a').first().attr('href', 'javascript:void(0)');

    var footerHeight = $('.footer').height();

    $('body').css({
        'padding-bottom': footerHeight
    });

    $('.drow li').on('mouseenter', function(){
        var dataDrow = $(this).data('drow');
        $('.drow li').removeClass('active');
        $('.drow .text').removeClass('active');
        $(this).addClass('active');
        $('.' + dataDrow).addClass('active');
    });

    $('.selected').on('click', function(){
        $('.chapters-items').addClass('active');
    });

    $('.chapters-items .chapters-item').on('click', function(){
        $('.selected .chapters-item').html($(this).html());
        $('.chapters-items').removeClass('active');
    });

    $('.mobile-menu .drop').on('click', function(){
        $(this).toggleClass('open');
    });

});

$(window).resize(function(){

    $('.mobile-menu ul li ul').parent().addClass('drop');

    var footerHeight = $('.footer').height();

    $('body').css({
        'padding-bottom': footerHeight
    });
    
});