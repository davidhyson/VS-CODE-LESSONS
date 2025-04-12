//start of the jquery
$(document).ready(function() {
    $('#newsSignup').hide();
    
    //on click event
    $('#signuplink').click(function(evt) {
        evt.preventDefault();
        $('#newsSignup').slideToggle();

        var $span = $('#openclose');
        if ($span.text() === '+') {
            $span.text('-');
        } else {
            $span.text('+');
        }

        $('#rose').animate({
            right: '100px',
            opacity: 1
        }, 1500, 'swing');
    });

    //h2 slogan,
    //Use fadeIn() and fadeOut() and callback for the slogan and change the text. Graded rubric
    $('h2').mouseover(function(){
        $('#slogan').fadeOut(normal, function() {
            var $h2 = $('#slogan');
            $h2.text('Hand Picked Just for You'); 
            $('#slogan').show(swing);
        });
    });
    $('h2').mouseout(function(){
        $('#slogan').fadeOut(fast, function() {
            var $h2 = $('#slogan');
            $h2.text('The Power of Flowers'); 
            $('#slogan').show(ease);
        });
    });
})