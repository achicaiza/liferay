(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define("calendarUtils", [], function () {
            return (factory(window.angular));
        });
    } else {
        factory(window.angular);
    }
}(this, function (angular) {


    angular.module('MainApplication', []).factory('calendarUtils', [function () {

        var factory = {};

        factory.isWeekend = function (date) {
            var dt = new Date(date);
            return (dt.getDay() == 6 || dt.getDay() == 0) ? 'SI' : 'NO';
        }

        return factory;

    }]);

}));
