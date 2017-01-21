angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  $scope.data = {};
  // Your code here
  //console.log('Links.getAll()', Links.getAll());
  $scope.getAll = function() {
    Links.getAll()
    .then(function(response) {
      $scope.data.links = response;
    });
  };
  $scope.getAll();
  //check the link against our database
});
