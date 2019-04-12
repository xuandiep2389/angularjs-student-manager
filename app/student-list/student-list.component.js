'use strict';

// register `studentList` component
angular.module('studentList')
    .component('studentList',{
        templateUrl: 'student-list/student-list.template.html',
        controller: ['$scope','$http', function StudentListController($scope,$http) {
            var self = this;

            $scope.sortType = 'name'; // set the default sort type

            $scope.sortRevert = false;

            $scope.sort = function(keyname) {
                $scope.sortRevert = !$scope.sortRevert;
                $scope.sortType = keyname;
            };

            // $scope.sortUp = function(keyname) {
            //     $scope.sortRevert = true;
            //     $scope.sortType = keyname;
            // };

            $http.get('students/students.json').then(function (response) {
                self.students = response.data;
            });
        }]
    });
