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
      .when('/search/artist/:query', {
        templateUrl: 'scripts//views/artistsearch.html',
        controller: 'ArtistSearchController'
      })
      .when('/search/album/:query', {
        templateUrl: 'scripts/views/albumsearch.html',
        controller: 'AlbumSearchController'
      })
      .when('/album/:albumId', {
        templateUrl: 'scripts/views/album.html',
        controller: 'AlbumController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
