$(document).ready(function () {
    // Create the item count and delete button variables. Graded Criteria
    var itemCount = 0;
    var removeButton = "<span class='del'>Remove</span>";

    // Add a click event to the .add class. Graded Criteria
    $(".add").on("click", function () {

        itemCount++;
        // Hide the empty cart text when an item is added to the shopping cart.
        // Add the text back when the shopping cart is emptied. Graded Criteria
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

    // Add delegate function for click event to remove buttons in shopping cart. Graded Criteria
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

    // Add click event for star ratings. Graded Criteria
    $(".rating img").on("click", function () {
        $(this).siblings("img").attr("src", "staroff.gif");
        $(this).attr("src", "staron.gif");
        $(this).prevAll("img").attr("src", "staron.gif");
    });
});