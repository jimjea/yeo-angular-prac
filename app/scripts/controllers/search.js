'use strict';

angular.module('SpotSearchAngularApp')

.controller('SearchController', ['$scope', '$location',
function($scope, $location) {

  $scope.types = 'album';

  $scope.runSearch = function() {
    $location.path('/search/' + $scope.types + '/' + $scope.searchQuery);
  };

}
]);