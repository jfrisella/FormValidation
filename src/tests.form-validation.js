/**
*   Tests for Jquery Form-Validation
*       need to add this to the lib
*/

if(typeof _tests === "undefined"){
    _tests = {};
}

(function ($) { 

    /**
    *   Validation Tests  
    */
    _tests = {

        /**
        *   Email
        */
        email: function (value, $el, attr) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
            return re.test(value);
        },

        /**
        *   Required
        */
        required: function (value, $el, attr) {
            return !_utils.isEmpty(value);
        },

        /**
        *   Number
        */
        number: function (value, $el, attr) {
            return /^\d+$/g.test(value);
        },

        /**
        *   Date
        */
        date: function (value, $el, attr) {
            return ((new Date(date) !== "Invalid Date" && !isNaN(new Date(date))));
        },

        /**
        *   Phone
        */
        phone: function (value, $el, attr) {
            var len = value.match(/\d/g).length;
            return len === 7 || len === 10 || len === 11;
        },

        /**
        *   Match
        *       @desc should match it's value against any other item
        *       with a matching class
        *       ex.  attribute of match="some-class-name" this function grabs all the items with that class
        *           gets the values and compares them. Case Insensitive
        */
        match: function (value, $el, attr) {
            return true;
        },

        /**
        *   Number Range
        */
        numberRange: function (value, $el, attr) {
            return true;
        },

        /**
        *   Minimum Length
        */
        minLength: function (value, $el, attr) {
            return true;
        },

        /**
        *   Maximum Length
        */
        maxLength: function (value, $el, attr) {
            return true;
        },

        /**
        *   Length 
        *       @desc should be used for ranges, or single lengths
        *       ex. 5,7-10,12  would be lengths 5 7 thru 10 and 12
        */
        length: function (value, $el, attr) {
            return true;
        }
    };


}(jQuery));