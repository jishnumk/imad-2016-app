$(document).ready(function(){
    $('#leftbtn').on('click', function(){
        $('#slider').css("left","0");
    
    });
    
    $('#rightbtn').on('click', function(){
        $('#slider1').css("right","0");
    
    });
    
    $('#leftbtn1').on('click', function(){
        $('#slider').css("left","-100%");
    
    });
});