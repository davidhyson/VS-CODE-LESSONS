//start of the jquery
$(document).ready(function() {
    $('#newsSignup').hide();
    
    //Signup link click event
    $('#signuplink').click(function(evt) {
        evt.preventDefault();
        // Toggle form visibility with slide effect
        $('#newsSignup').slideToggle();

        // Change + to - and vice versa
        let sign = $('#openclose').text();
        $('#openclose').text(sign === "+" ? "-" : "+");
        
    });

    //h2 slogan,
    //Use fadeIn() and fadeOut() and callback for the slogan and change the text. Graded rubric
    $('#slogan').hover(
        function () {
          $(this).fadeOut('normal', 'linear', function () {
            $(this).text("Hand Picked Just for You").fadeIn('slow', 'swing');
          });
        },
        function () {
          $(this).fadeOut('fast', 'swing', function () {
            $(this).text("The Power of Flowers").fadeIn('slow', 'linear');
          });
        }
     );
    
    //Animate the rose image on page load pg.193
    $('#rose').animate({
        right: '100px',
        opacity: 1
    }, 1500, 'swing');

    //Form submission event pg.258
    //Add submit event to display the alert, hide form, fade out link and prevent form submission. Graded rubric
    $('#newsSignup').submit(function (event) {
        alert("Thank you for registering");
        $(this).hide();
        $('#signuplink').fadeTo('slow', 0.3);
        event.preventDefault();
    });
    
})