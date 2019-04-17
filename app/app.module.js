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

    // var self = this;
    // $http.get('students/students.json').then(function (response) {
    //     self.students = response.data;
    // });


    // // calculate data input for pie chat
    // let saigonPer,hanoiPer,haiduongPer,haiphongPer;
    //
    // let saigonCount = 0;
    // let hanoiCount = 0;
    // let haiphongCount = 0;
    // let haiduongCount = 0;
    //
    // let province = ['Hai duong', 'Hai phong', 'Ha noi', 'Sai gon'];
    // let provincePer = [];
    //
    // var dataChart = [];
    //
    // $scope.consoleLo = function () {
    //     for (let i = 0; i < self.students.length; i++) {
    //         switch (self.students[i].address){
    //             case 'Hai phong':
    //                 haiphongCount++;
    //                 break;
    //             case 'Hai duong':
    //                 haiduongCount++;
    //                 break;
    //             case 'Ha noi':
    //                 hanoiCount++;
    //                 break;
    //             case 'Sai gon':
    //                 saigonCount++;
    //         }
    //     }
    //     haiduongPer = Math.round((haiduongCount/self.students.length)*100);
    //     console.log(haiduongPer);
    //     haiphongPer = Math.round((haiphongCount/self.students.length)*100);
    //     console.log(haiphongPer);
    //     hanoiPer = Math.round((hanoiCount/self.students.length)*100);
    //     console.log(hanoiPer);
    //     saigonPer = Math.round((saigonCount/self.students.length)*100);
    //     console.log(saigonPer);
    //     provincePer.push(haiduongPer);
    //     provincePer.push(haiphongPer);
    //     provincePer.push(hanoiPer);
    //     provincePer.push(saigonPer);
    //     console.log(provincePer)
    //
    //     for (let j = 0; j < province.length; j++){
    //         dataChart.push([province[j],provincePer[j]])
    //     }
    //     console.log(dataChart)
    // }
})
;
