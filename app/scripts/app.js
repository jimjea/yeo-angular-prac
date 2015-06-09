'use strict';

/**
 * @ngdoc overview
 * @name spotSearchApp
 * @description
 * # spotSearchApp
 *
 * Main module of the application.
 */
angular
  .module('SpotSearchAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {

      })
      .when('/about', {

      })
      .otherwise({
        redirectTo: '/'
      });
  });
