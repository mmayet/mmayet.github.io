$(function() {
    var $toastSuccess = $('<span>Your message has been sent!</span>');
    var $toastFailure = $('<span>Your message was NOT sent!<br/>Please try again.</span>');
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
            var message = $("textarea#messageArea").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    /*$('#success').html("</br><div class='alert alert-success green lighten-3'>");
                    $('#success > .alert-success').html("<button type='button' class=' mdl-button mdl-js-button mdl-button--raised mdl-button--colored close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');*/
                        Materialize.toast($toastSuccess, 5000);
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    /*$('#success').html("<div class='alert alert-danger red darken-1'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');*/
                    Materialize.toast($toastFailure, 5000);
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
