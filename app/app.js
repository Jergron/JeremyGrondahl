define([
  'angular',
  'angularRoute',
  'angularAnimate',
  'uiBoot',
  '../controllers/MainCtrl'
], function(angular, angularRoute, angularAnimate, uiBoot, MainCtrl) {

    // Declare app level module which depends on views, and components
    return angular.module('JeremyGrondahl', [
      'ngRoute',
      'ngAnimate',
      'ui.bootstrap',
      'JeremyGrondahl.portfolio'
    ])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
        .otherwise({redirectTo: '/'});
    }]);
});














