//start of the jquery
$(document).ready(function() {
    //hide newsSignup
    const form = document.getElementById("newsSignup");
    form.style.display = "none";
    //$('.hidesignup').hide();
    
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
    $('h1,h2').mouseover(function(){
    $(this).css('color','red');
    });
    $('h1,h2').mouseout(function(){
    $(this).css('color','black');
    });
})