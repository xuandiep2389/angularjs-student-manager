'use strict';

// define the `studentManager` app module
angular.module('studentManager', [
    'myChart',
    //... which depends on the `studentList` module
    'studentList'
]).controller('studentManagerController', function ($scope) {
    $scope.showGraph = true;

    $scope.toggleShowGraph = function () {
        $scope.showGraph = !$scope.showGraph;
    };
})
;
