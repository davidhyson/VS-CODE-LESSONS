$(document).ready(function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(id, condition, message) {
        const value = $(`#${id}`).val().trim();
        if (!condition(value)) {
            $(`#${id}Error`).text(message);
        } else {
            $(`#${id}Error`).text('');
        }
    }

    $('#name').blur(function () {
        if ($(this).val().trim() === "") { //we use trim in case there is space  only
            $('#nameErr').text('Name is required');
        } else {
            $('#nameErr').text('');
        }
    });


    $('#email').blur(function () {
        if ($(this).val().trim() === "") {
            $('#emailErr').text('Email is required');
        } else if (!emailPattern.test($(this).val().trim())) {
            $('#emailErr').text('Enter a valid email address');
        } else {
            $('#emailErr').text('');
        }
    });


    $('#address').blur(function () {
        if ($(this).val().trim() === "") {
            $('#addressErr').text('Address is required');
        } else {
            $('#addressErr').text('');
        }
    });


    $('#city').blur(function () {
        if ($(this).val().trim() === "") {
            $('#cityErr').text('City is required');
        } else {
            $('#cityErr').text('');
        }
    });


    $('#zip').blur(function () {
        var zipVal = $(this).val().trim();
        if (zipVal === "") {
            $('#zipErr').text('Zip code is required');
        } else if (!/^\d{5}$/.test(zipVal)) {
            $('#zipErr').text('Enter a valid 5-digit zip code');
        } else {
            $('#zipErr').text('');
        }
    });

    //this is for the copy address part
    $('#copy').change(function () {
        if ($(this).is(':checked')) {
            // Assuming billing fields exist with these IDs
            $('#shipaddr').val($('#address').val());
            $('#shipcity').val($('#city').val());
            $('#shipzip').val($('#zip').val());

            let billingState = $('#state').val(); // Billing state dropdown
            // Add to shipping state dropdown if missing
            if (!$('#shipstate option[value="' + billingState + '"]').length) {
                $('#shipstate').append(`<option value="${billingState}" selected>${billingState}</option>`);
            } else {
                $('#shipstate').val(billingState);
            }
        }
    });


    //order form
    $('.qty').blur(function () {
        let orderTotal = 0;

        $('.qty').each(function () {
            const index = $(this).attr('id');
            let qty = parseInt($(this).val());

            if (isNaN(qty)) {
                qty = 0;
                $(this).val(0); // set value if not a number
            }

            const price = parseFloat($('#price' + index).text()) || 0;
            const itemTotal = qty * price;

            $('#total' + index).text(`$${itemTotal.toFixed(2)}`);
            orderTotal += itemTotal;
        });

        // Subtotal
        $('#subt').text(`$${orderTotal.toFixed(2)}`);

        // Tax
        const state = $('#shipstate').val();
        let tax = 0;
        if (state === 'TX') {
            tax = orderTotal * 0.08;
        }
        $('#tax').text(`$${tax.toFixed(2)}`);

        // Shipping
        let shipping = 0;
        if (state === 'TX') {
            shipping = 5;
        } else if (state === 'CA' || state === 'NY') {
            shipping = 20;
        } else {
            shipping = 10;
        }
        $('#ship').text(`$${shipping.toFixed(2)}`);

        // Grand Total
        const grandTotal = orderTotal + tax + shipping;
        $('#gTotal').text(`$${grandTotal.toFixed(2)}`);
    });
});