$(document).ready(function(){

    var footerHeight = $('.footer').height();

    $('body').css({
        'padding-bottom': footerHeight
    });

});

$(window).resize(function(){

    var footerHeight = $('.footer').height();

    $('body').css({
        'padding-bottom': footerHeight
    });
    
});