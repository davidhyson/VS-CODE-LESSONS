$(document).ready(function () {
    // Add hover effect to thumbnails
    // Create rollovers for all the thumbnail images. Graded Criteria
    $('#thumbs img').hover(
        function () {
            $(this).css({
                'border': '2px solid darkgreen',
                'box-shadow': '0 0 10px rgba(0, 100, 0, 0.7)'
            });
        },
        function () {
            $(this).css({
                'border': '',
                'box-shadow': ''
            });
        }
    );

    // Create a click event to display the thumbnail images in the larger image. Graded Criteria
    // Display new title under large image when replaced. Graded Criteria
    $('#thumbs img').each(function() {
		// get the src and title attribute of the thumbnail image
		var imgFile = $(this).attr('src');
        var newAlt = $(this).attr('alt');
		// when the image is clicked, assign the src and title attribute to the lgPic
		$(this).click(function() {
			$('#lgPic').attr('src', imgFile);
            $('#lgTitle').text(newAlt);
		});// end click
	}); // end each

    // Open a new window with the large image as the source. Must be current large image. Graded Criteria
    $('#lgPic').click(function () {
        var src = $(this).attr('src');
        window.open(src, '_blank');
    });

});