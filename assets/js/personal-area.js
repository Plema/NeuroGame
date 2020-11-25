$(document).ready(function(){

    $('.area-nav li').on('click', function(){
        var dataProgram = $(this).data('area');
        $('.area-nav li').removeClass('active');
        $('.personal-item').removeClass('active');
        $(this).addClass('active');
        $('.' + dataProgram).addClass('active');
    });


    $('.favorites-link').on('click', function(){
        $(this).toggleClass('active');
    });

});

$(window).resize(function(){

    
    
});