$(document).ready(function(){
    $('#leftbtn').on('click', function(){
        $('#slider').css("left","0");
    
    });
    
    $('#rightbtn').on('click', function(){
        $('#slider').css("right","100%");
    
    });
});