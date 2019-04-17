'use strict';

angular.module('myChart',[])
//directive for donut charts
    .directive('myDonutChart', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '='
            },
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
                        data: [
                            ["Hai phong", 20],
                            ["Hai duong", 40],
                            ["Sai gon", 20],
                            ["Ha noi", 20]
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
    .controller('myChartController', ['$scope','$http',function ($scope, $http) {


    }]);
