/**
 * main.js 
 */

  var app = angular.module('ppApp', []);
  app.controller('srcReader', function($scope) {
    $scope.source = "test";
    $scope.deck = "deck";
    $scope.outputy = "wha";
    $scope.$watch("source + deck", function(x) {
      //console.log("x:", x);
      $scope.output = "I like " + $scope.source + " and " + $scope.deck;
      });

    //Launch
    init();

  });
