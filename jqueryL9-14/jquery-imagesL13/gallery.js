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
    $('#thumbs img').click(function () {
        const newSrc = $(this).attr('src');
        const newAlt = $(this).attr('alt');
        $('#lgPic').attr('src', newSrc);
        $('#lgTitle').text(newAlt);
    });
    // Open a new window with the large image as the source. Must be current large image. Graded Criteria
    $('#lgPic').click(function () {
        const src = $(this).attr('src');
        window.open(src, '_blank');
    });
});