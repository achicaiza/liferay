(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define("dsg-calendar", ['calendarUtils'], function () {
            return (factory());
        });
    } else {
        factory();
    }
}(this, function () {

    angular.module('MainApplication').controller("dsgCalendar", ['$scope', 'calendarUtils', function ($scope, calendarUtils) {

        $scope.dateChanged = function () {
            $scope.isWeekEnd = calendarUtils.isWeekend($scope.date);
        }

  }]);

}));
