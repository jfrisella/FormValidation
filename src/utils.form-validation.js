/**
*   Utils for Jquery form-validation
*/

if (typeof _utils === "undefined") {
    _utils = {};
}

(function ($) { 

    /**
    *   Utility functions
    */
    _utils = {

        /**
        *   Development Mode
        */
        mode: "debug",

        /**
        *   Log
        */
        log: function (info) {
            if (this.mode === "debug") {
                console.log(info);
            }
        },

        /**
        *   Camel cases from hyphen or underscore
        */
        camel: function (str) {
            return str.replace(/[-_]([a-z])/g, function (g) { return g[1].toUpperCase(); });
        },

        /**
        *   Get all Attributes on an element
        */
        attr: function ($el) {
            var attr = {};
            $.each($el.get(0).attributes, function (i, attrib) {
                attr[attrib.name.replace(/(data-)/i, "")] = attrib.value;
            });
            return attr;
        },

        /**
        *   Extend Helper
        *       - this will combine the multiple actions of extend
        *       that need to take place
        */
        extend: function (options) {

            //Extend the test functions first
            $.extend(_tests, options.tests || {});

            //Then extend the regular options
            $.extend(_default, options);
        },

        /**
        *   Gets value of field
        *       - this can be an any element, either a normal input field
        *       or another element with a "value" attribute
        */
        value: function ($el, attr) {
            return ($el.is("input,select,textarea")) ? $el.val() : attr.value;
        },

        /**
        *   Is Empty
        */
        isEmpty: function (value) {
            return (value === "") || (value === null) || (value === undefined);
        }

    };


} (jQuery));