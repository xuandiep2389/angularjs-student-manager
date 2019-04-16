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


            $scope.name = true;
            $scope.age = true;
            $scope.gender = true;
            $scope.address = false;
            $scope.phoneNum = false;

            // //toggle status of columns
            // $scope.toggleName = function(){
            //     if($scope.name === true)
            //         $scope.name = false;
            //     else if($scope.name === false)
            //         $scope.name = true;
            // };
            //
            // $scope.toggleAge = function(){
            //     if($scope.age === true)
            //         $scope.age = false;
            //     else if($scope.age === false)
            //         $scope.age = true;
            // };
            //
            // $scope.toggleGender = function(){
            //     if($scope.gender === true)
            //         $scope.gender = false;
            //     else if($scope.gender === false)
            //         $scope.gender = true;
            // };
            //
            // $scope.toggleAddress = function(){
            //     if($scope.address === true)
            //         $scope.address = false;
            //     else if($scope.address === false)
            //         $scope.address = true;
            // };
            //
            // $scope.togglePhoneNum = function(){
            //     if($scope.phoneNum === true)
            //         $scope.phoneNum = false;
            //     else if($scope.phoneNum === false)
            //         $scope.phoneNum = true;
            // };

            // show all the columns of table
            $scope.toggleCheck = function () {
                if ($scope.phoneNum == true) {
                    $scope.uncheckAll();
                } else {
                    $scope.checkAll();
                }

            };

            $scope.checkAll = function () {
                $scope.name = true;
                $scope.age = true;
                $scope.gender = true;
                $scope.address = true;
                $scope.phoneNum = true;
            };

            $scope.uncheckAll = function () {
                $scope.name = false;
                $scope.age = false;
                $scope.gender = false;
                $scope.address = false;
                $scope.phoneNum = false;
            };
        }]
    });
