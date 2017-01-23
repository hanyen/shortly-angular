angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) { //hanyen: pass in $routeParams
  // create data object property
  $scope.data = {};
  // create function to wrap factory function so that 
  // it can be executed by the HTML
  var initializeLinks = function () {
    // execute Links.getAll() factory function
    Links.getAll()
    // promise to pass the result (links) to .then
    .then(function(links) {
      // store links in data.links
      $scope.data.links = links;
      console.log('Whats inside $scope.data.links:', links);
    })
    // error handling
    .catch(function(error) {
      console.log(error);
    })
  };
  //immediately invoke initializeLinks()
  initializeLinks();
});
