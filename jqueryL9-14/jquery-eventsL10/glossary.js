//jquery, $(document) function is required to use jquery.
$(document).ready(function(){

//hide the botanic class
$('.botanic').hide();
//hide method to the imgdiv class
$('.imgdiv').hide();

//h1 and h2,
//Add mouseover and mouseout to headings to change color. Graded Criteria
 $('h1,h2').mouseover(function(){
    $(this).css('color','red');
});
$('h1,h2').mouseout(function(){
   $(this).css('color','black');
});

//flower methond, 
//Hide botanic names and display individual ones when a flower is clicked. Graded Criteria
$('.flower').click(function(){
    $('.botanic').hide();
    $(this).children('.botanic').show();
});

 //hover event for the .pic,
 //Add hover event to display images for select flowers beside the flower name and hide when mouse moves off. Graded Criteria
 $('.pic').hover(
    //the first function (mouseover)
    function(evt) {
        var flowerId = $(this).attr('title');
        var imgDivId = '#' + flowerId;

        var x = evt.pageX;
        var y = evt.pageY;

        $(imgDivId).css({
            top: y + 'px',
            left: x + 150 + 'px'
        }).show();
    },
    //the second function (mouseout)
    function(){
        var flowerId = $(this).attr('title');
        var imgDivId = '#' + flowerId;

        $(imgDivId).hide();
    });

    //keypress event,
    //Add keypress event to move to the first flower for each letter when the letter is typed in. Graded Criteria
    $(document).keypress(function(e) {
        var keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = "#" + keyPressed;
    });
});
