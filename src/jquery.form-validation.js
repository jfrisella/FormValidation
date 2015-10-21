/**
*   JQuery Form Validation
*/

(function ($) {


    /**
    *   Utility Methods
    */
    //var _utils = _utils;


    /**
    *   Testing functions for validation
    */
    //var _tests = _tests;



    /**
    *   Default Plugin Options
    *       @type Object
    *       @desc these will be overwritten by the options
    *       passed in by the user
    */
    //var _default = _default;


    /**
    *   Plugin Methods
    */
    var _public = (function () {

        var _private = {

            //Form Object
            formObject: {},

            //Form Errors
            formErrors: [],

            /**
            *   Starts the Validation Process
            */
            startValidation: function () {
                _utils.log("Starting Validation");
                //_utils.log(_default);
                //_utils.log(_tests);

                //Clear previous errors
                _private.formObject = {};
                _private.formErrors.length = 0;

                //Grabs all the form items
                //and loops through each for validation
                var $e;
                $e = $(this).find("." + _default.inputClass);
                $e.each(_private.validationLoop);

                //If there are no errors, return the formObject
                //else just return a false
                return (_private.formErrors.length === 0) ? _private.formObject : false;

            },
            validationLoop: function (i) {
                var $el = $(this),
                    attr = _utils.attr($el),
                    val;

                //Get the value of the Element
                val = _utils.value($el, attr);

                //Test if item is empty
                //and thus we will check if item is required
                if (_utils.isEmpty(val)) {

                    //Test if Required
                    if (attr["required"]) {

                        //If you are in here then there is a problem
                        //the value is empty but is also required
                        //we need to add an error to the list
                        _private.addErrors($el, attr);

                        //Check if we are handling all errors
                        //or just progressive errors
                        if (!_default.checkAllErrors) {
                            return false;
                        }
                    }
                }
                //End of Required Test

                _utils.log(attr);

                for (key in attr) {
                    if (attr.hasOwnProperty(key)) {
                        if (typeof _tests[key] !== "function") continue;
                        if (!_tests[key].call(this, val, $el, attr)) {

                            //Add an Error
                            _private.addErrors(key, $el, attr)

                            //Test if need to stop testing
                            //or if need to collect all errors
                            if (!_default.checkAllErrors) {
                                return false;
                            }
                        }
                    }
                }

                //Add Item to form Object
                _private.formObject[attr.name] = val;

            },

            /**
            *   Add Errors to the Errors Array
            */
            addErrors: function (key, $el, attr) {

                //First add the error
                _private.formErrors.push({
                    name: attr.name,
                    message: attr["message"] || "Error"
                });

                //Add Error Class to Element
                $el.addClass(_default.errorClass);

                //Fire any custom error functions
                if (_default.error && typeof _default.error === "function") {
                    _default.error($el, attr);
                }
            }

        };

        return {
            init: function (options) {
                _utils.log("Init Method");

                //Combine options with config
                //this will overwrite the default behavior
                _utils.extend(options);

                //That is all we will do with this one
                //we will make another method to start the
                //form validation process
                _utils.log(_default);
                _utils.log(_tests);

                return this;
            },

            /**
            *   Validate
            *       @return {Object/Boolean} - the main form object if passes validation
            *           - returns false if the validation failed
            *       @desc runs a validation test on the form items
            */
            validate: function (options) {
                _utils.log("Validate Method");

                //We allow the user to change options at the time of validation
                _utils.extend(options);

                //Start Validation of form
                //Passing other arguments, although there are none
                //maybe in the future there will be
                return _private.startValidation.apply(this, Array.prototype.slice.call(arguments, 1));
            },

            /**
            *   Errors
            *       @return {Array} - errors
            *       @desc returns all errors, should be called after a validation has run
            */
            errors: function () {
                return _private.formErrors;
            },

            /**
            *   Form
            *       @return {Object} - all form items as an object
            *       @desc returns form object, should be called after a validation has run
            */
            form: function () {
                return _private.formObject;
            }
        }
    })();


    /**
    *   Form Validation registration on jquery object
    *       - only routes options to closure methods above
    */
    $.fn.formValidation = function (methodOrOptions) {
        if (_public[methodOrOptions]) {
            return _public[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return _public.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.formValidation');
        }
    };


})(jQuery);