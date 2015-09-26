/**
*   Defaults for Jquery Form Validation
*/

if (typeof _default === "undefined") {
    _default = {};
}

(function ($) { 

    
    _default = {

        /**
        *   Input Class
        *       @type String
        *       @desc the class name used to determine which data fields should
        *           be used by the plugin
        */
        inputClass: "form-input",

        /**
        *   Error Class
        *       @type String
        *       @desc the class to be added to an invalid data field.
        */
        errorClass: "form-input-error",

        /**
        *   Check All Errors
        *       @type Boolean
        *       @desc 
        */
        checkAllErrors: true,

        /**
        *   After Method
        *       @type Function
        *       @desc fired after validation
        */
        after: function (data) { },

        /**
        *   Error Method
        *       @param {Jquery Element} - element of the field element
        *       @param {Object} - object of attributes from the field element
        *       @type Function
        *       @desc fired after every single error
        */
        error: function ($el, attr) {
            //do some stuff with the $el
            //do some stuff with the attr
        },

        /**
        *   Error All Method
        *       @param {Array} - array of error objects
        *       @type Function
        *       @desc fired at the end of the validation
        */
        errorsAll: function (errors) {
            //Do something with the errors
        }

    };

} (jQuery));