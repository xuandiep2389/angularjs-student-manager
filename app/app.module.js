'use strict';

// define the `studentManager` app module
angular.module('studentManager', [
    'myChart',
    //... which depends on the `studentList` module
    'studentList'
]);
