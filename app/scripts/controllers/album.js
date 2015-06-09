'use strict';

angular.module('SpotSearchAngularApp')
.controller('AlbumController', ['$scope', 'searchFactory', '$routeParams',
function($scope, searchFactory, $routeParams) {

  searchFactory.getAlbum($routeParams.albumId)
  .success(function(results) {
    $scope.results = results;
    console.log('result :', results);
  })
  .error(function(error) {
    $scope.status = 'Unable to load album: ' + error.message;
  });

  $scope.playTrack = function(url) {
    $scope.player.load({
      src: url
    });
    $scope.player.play();
  };


}

]);