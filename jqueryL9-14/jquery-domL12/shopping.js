$(document).ready(function () {

    var itemCount = 0;


    var removeButton = "<span class='del'>Remove</span>";

    // Add a click event to the .add class
    $(".add").on("click", function () {

        itemCount++;

        if (itemCount > 0) {
            $("#empty").hide();
        }


        var itemName = $(this).attr("name");
        var itemID = $(this).attr("id");

        // Create a list item
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " " + removeButton + "</li>";

        $("#cart").append(cartLink);
        $(this).hide();
    });


    $("#cart").on("click", ".del", function () {

        var parentLi = $(this).parent();
        var itemID = parentLi.attr("name");
        parentLi.remove();

        // Deduct 1 from the item count.
        itemCount--;


        if (itemCount === 0) {
            $("#empty").show();
        }

        $("#" + itemID).show();
    });


    $(".rating img").on("click", function () {

        $(this).siblings("img").attr("src", "staroff.gif");

        $(this).attr("src", "staron.gif");

        $(this).prevAll("img").attr("src", "staron.gif");
    });
});