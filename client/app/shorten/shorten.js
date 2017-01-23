angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // create link object property
  $scope.link = {};
  // create addLink method that can be invoked
  // by ng-model directive
  $scope.addLink = function() {
    // loading property set to true to turn on spinner
    $scope.loading = true;
    // create new links with Link.addOne factory function
    Links.addOne($scope.link)
    .then(function() {
      // loading property set to false to turn off spinner
      $scope.loading = false;
      // redirect to homepage
      $location.path('/');
    });
  };
});