'use strict';

angular.module('myChart',[])

//directive for donut charts
    .directive('myDonutChart', function () {

        // var students = [];
        //
        // $http.get('students/students.json').then(function (response) {
        //     students = response.data;
        // });
        //
        // calculateData();
        //
        // var dataChart = [];
        //
        // function calculateData(){
        //     // calculate data input for pie chat
        //     let saigonPer, hanoiPer, haiduongPer, haiphongPer;
        //
        //     let saigonCount = 0;
        //     let hanoiCount = 0;
        //     let haiphongCount = 0;
        //     let haiduongCount = 0;
        //
        //     let province = ['Hai duong', 'Hai phong', 'Ha noi', 'Sai gon'];
        //     let provincePer = [];
        //
        //
        //
        //
        //     for (let i = 0; i < students.length; i++) {
        //         switch (students[i].address) {
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
        //
        //     haiduongPer = Math.round((haiduongCount / students.length) * 100);
        //     console.log(haiduongPer);
        //     haiphongPer = Math.round((haiphongCount / students.length) * 100);
        //     console.log(haiphongPer);
        //     hanoiPer = Math.round((hanoiCount / students.length) * 100);
        //     console.log(hanoiPer);
        //     saigonPer = Math.round((saigonCount / students.length) * 100);
        //     console.log(saigonPer);
        //     provincePer.push(haiduongPer);
        //     provincePer.push(haiphongPer);
        //     provincePer.push(hanoiPer);
        //     provincePer.push(saigonPer);
        //     console.log(provincePer);
        //
        //     for (let j = 0; j < province.length; j++) {
        //         dataChart.push([province[j], provincePer[j]])
        //     }
        // }


        return {
            restrict: 'E',
            scope:{
                data: "="
            },
            replace: true,
            template: '<div id="myDChart" style="margin: 0 auto"></div>',
            link: function (scope, element, attrs) {
                Highcharts.chart(element[0],{
                    chart: {
                        renderTo: 'myDChart',
                        type: 'pie'
                    },
                    title: {
                        text: 5 + '<br>' + 'students',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: -30
                    },
                    yAxis: {
                        title: {
                            text: 'Total percent market share'
                        }
                    },
                    plotOptions: {
                        pie: {
                            shadow: false,
                            point: {
                                events: {
                                    mouseOver: function (e) {
                                        this.originalRadius = this.graphic.r;
                                        this.graphic.animate({
                                            r: this.originalRadius * 1.07
                                        }, 200);
                                    },
                                    mouseOut: function (e) {
                                        this.graphic.animate({
                                            r: this.originalRadius
                                        }, 200);
                                    }
                                }
                            }
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
                        }
                    },
                    series: [{
                        name: 'Data',
                        data: [['hai duong', 40],['hai phong', 20],['ha noi', 20],['sai gon', 20]

                        ],
                        size: '100%',
                        innerSize: '70%',
                        showInLegend: true,
                        dataLabels: {
                            enabled: false
                        },
                        states: {
                            hover: {
                                halo: false
                            }
                        },
                    }]

                });

            }

        };
    })
    .controller('myChartController', ['$scope',function ($scope) {
    }]);
