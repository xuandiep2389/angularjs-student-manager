'use strict';

// define the `studentManager` app module
angular.module('studentManager', [
    'myChart',
    //... which depends on the `studentList` module
    'studentList'
]).controller('studentManagerController', function ($scope, $http) {
    $scope.showGraph = true;

    $scope.toggleShowGraph = function () {
        $scope.showGraph = !$scope.showGraph;
    };

    var self = this;
    $http.get('students/students.json').then(function (response) {
        self.students = response.data;
    });

    $scope.saigonPer;
    $scope.hanoiPer;
    $scope.haiduongPer;
    $scope.haiphongPer;

    let saigonCount = 0;
    let hanoiCount = 0;
    let haiphongCount = 0;
    let haiduongCount = 0;



    $scope.consoleLo = function () {
        for (let i = 0; i < self.students.length; i++) {
            switch (self.students[i].address){
                case 'Hai phong':
                    haiphongCount++;
                    break;
                case 'Hai duong':
                    haiduongCount++;
                    break;
                case 'Ha noi':
                    hanoiCount++;
                    break;
                case 'Sai gon':
                    saigonCount++;
            }
        }
        $scope.haiduongPer = Math.round((haiduongCount/self.students.length)*100);
        console.log($scope.haiduongPer)
    }



})
;
