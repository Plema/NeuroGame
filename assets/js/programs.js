$(document).ready(function(){

    $('.filter li a').on('click', function(){
        var filterItem = $(this).text();
        $(this).parents('ul').siblings('.item').find('p').text(filterItem);
    });

    $('.favorites-link').on('click', function(){
        $(this).toggleClass('active');
    });

});

$(window).resize(function(){

    
    
});