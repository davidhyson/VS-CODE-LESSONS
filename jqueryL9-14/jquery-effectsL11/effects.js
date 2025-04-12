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

    //h1 and h2,
    //Add mouseover and mouseout to headings to change color. Graded rubric
    $('h2').mouseover(function(){
        $('#slogan').fadeOut(function() {
            var $h2 = $('#slogan');
            $h2.text('Hand Picked Just for You'); 
            $('#slogan').show();
        });
    });
    $('h2').mouseout(function(){
        $('#slogan').fadeOut(function() {
            var $h2 = $('#slogan');
            $h2.text('The Power of Flowers'); 
            $('#slogan').show();
        });
    });
})