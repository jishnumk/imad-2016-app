$(document).ready(function(){
    animateDiv();
    
    $('#leftbtn').on('click', function(){
        $('#slider').css("left","0");
        
    
    });
    
    $('#rightbtn').on('click', function(){
        $('#slider1').css("right","0");
    
    });
    
    $('#leftbtn1').on('click', function(){
        $('#slider1').css("right","-100%");
        
    
    });
    
     $('#rightbtn1').on('click', function(){
        $('#slider').css("left","-100%");
    
    });
    
 
    

});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv() {
    var $target = $('#flash');
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.a').animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}
