'use strict';

/**
 * @ngdoc function
 * @name spotSearchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotSearchApp
 */
angular.module('spotSearchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
