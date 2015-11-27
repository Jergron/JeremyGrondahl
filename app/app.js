define([
  'angular',
  'angularRoute',
  'angularAnimate',
  '../controllers/MainCtrl'
], function(angular, angularRoute, angularAnimate, MainCtrl) {

    // Declare app level module which depends on views, and components
    return angular.module('JeremyGrondahl', [
      'ngRoute',
      'ngAnimate',
      'JeremyGrondahl.portfolio'
    ])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
        .otherwise({redirectTo: '/'});
    }]);
});














