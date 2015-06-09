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
  .module('spotSearchApp', [
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
