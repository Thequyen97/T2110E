$(document).ready(function(){
    $('.tabs_content:not(:first)').hide();
    $('.tabs li a').click(function(){
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tabs_content').hide();
        
        var activeTab = $(this).attr('href');
        //activeTab = #news// activeTab =#random
        $(activeTab).fadeIn();
        return false;
    });
    
})