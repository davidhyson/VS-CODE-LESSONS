//jquery function is required
$(document).ready(function(){

//hide the botanic class
$('.botanic').hide();
//hide method to the imgdiv class
$('.imgdiv').hide();

//h1 and h2, add mouseover and mouseout to headings to change color. Graded rubric
 $('h1,h2').mouseover(function(){
    $(this).css('color','red');
});
$('h1,h2').mouseout(function(){
   $(this).css('color','black');
});

//flower methond, Hide botanic names and display individual ones when a flower is clicked. Graded Rubric
$('.flower').click(function(){
    $('.botanic').hide();
    $(this).children('.botanic').show();
});


});
