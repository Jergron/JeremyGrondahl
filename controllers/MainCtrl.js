define([
  'angular',
  'angularRoute',
  'angularAnimate'
], function(angular) {
  angular.module("JeremyGrondahl.portfolio", ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    });
  }]).controller("MainCtrl", 
  ["$scope", "$animate",
  function($scope, $animate) {

  $( ".main" ).css( "color", "blue" );

  }
  ]);
});
