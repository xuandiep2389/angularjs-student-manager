'use strict';

var app = angular.module('myChart', []);

//directive for donut charts
app.directive('myDonutChart', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="myDChart" style="margin: 0 auto"></div>',

        link: function (scope, element, attrs) {

            scope.$watch(function () {
                return attrs.chart
            }, function () {
                if (!attrs.chart) return;
                var charts = JSON.parse(attrs.chart);
                $(element[0]).highcharts(charts);
            });

        }

    };
});

app.component('myDonutChartComponent', {
    templateUrl: 'my-chart/my-chart.template.html',
    controller: ['$scope', '$http', function ($scope, $http) {

        var self = this;
        self.students = [];

        $http.get('students/students.json').then(function (response) {
            self.students = response.data;
        });

        // calculate data input for pie chat
        let saigonPer, hanoiPer, haiduongPer, haiphongPer;

        let saigonCount = 0;
        let hanoiCount = 0;
        let haiphongCount = 0;
        let haiduongCount = 0;

        let province = ['Hai duong', 'Hai phong', 'Ha noi', 'Sai gon'];
        let provincePer = [];

        var dataChart = [];


        for (let i = 0; i < self.students.length; i++) {
            switch (self.students[i].address) {
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

        haiduongPer = Math.round((haiduongCount / self.students.length) * 100);
        console.log(haiduongPer);
        haiphongPer = Math.round((haiphongCount / self.students.length) * 100);
        console.log(haiphongPer);
        hanoiPer = Math.round((hanoiCount / self.students.length) * 100);
        console.log(hanoiPer);
        saigonPer = Math.round((saigonCount / self.students.length) * 100);
        console.log(saigonPer);
        provincePer.push(haiduongPer);
        provincePer.push(haiphongPer);
        provincePer.push(hanoiPer);
        provincePer.push(saigonPer);
        console.log(provincePer);

        for (let j = 0; j < province.length; j++) {
            dataChart.push([province[j], provincePer[j]])
        }

        $scope.renderChart = {
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
                data: dataChart,
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
        }
    }],
});

