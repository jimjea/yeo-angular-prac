'use strict';

angular.module('SpotSearchAngularApp')

.controller('SearchController', ['$scope', 'searchFactory',
function($scope, searchFactory) {

  $scope.types = 'album';
  $scope.results = {};

  $scope.runSearch = function() {
    searchFactory.getResults($scope.searchQuery, $scope.types)
      .success(function(results){
        $scope.results = results;
        console.log($scope.results);
      })
      .error(function(error){
        $scope.status = 'Unable to load search results: ' + error.message;
      });
  };

}
]);