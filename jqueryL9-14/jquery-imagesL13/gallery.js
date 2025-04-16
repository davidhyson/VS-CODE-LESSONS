$(document).ready(function () {
    // Add hover effect to thumbnails
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

    $('#thumbs img').click(function () {
        const newSrc = $(this).attr('src');
        const newAlt = $(this).attr('alt');
        $('#lgPic').attr('src', newSrc);
        $('#lgTitle').text(newAlt);
    });

    $('#lgPic').click(function () {
        const src = $(this).attr('src');
        window.open(src, '_blank');
    });
});