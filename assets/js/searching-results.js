$(document).ready(function(){

    $('.filter li a').on('click', function(){
        var filterItem = $(this).text();
        $(this).parents('ul').siblings('.item').find('p').text(filterItem);
    });

    $('.favorites-link').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.rograms-item .text h4').matchHeight({
        byRow: false
    }); 

    $('.rograms-item .text ul').matchHeight({
        byRow: false
    }); 

});

$(window).resize(function(){

    
    
});