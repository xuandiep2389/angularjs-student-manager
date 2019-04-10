'use strict';

// register `studentList` component
angular.module('studentList')
    .component('studentList',{
        templateUrl: 'student-list/student-list.template.html',
        controller: ['$http', function StudentListController($http) {
            var self = this;

            $http.get('students/students.json').then(function (response) {
                self.students = response.data;
            });
        }]
    });
