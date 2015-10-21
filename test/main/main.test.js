/**
*   Main Tests
*/
(function ($) {

    $("#button").click(function () {


        //Put Some Test stuff in here
        var $el = $(".main-form");

        var item = $el.formValidation("validate", {});

        if (!item) {
            console.log($el.formValidation("errors"));
        } else {
            console.log(item);
        }


    });


} (jQuery));