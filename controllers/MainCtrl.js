define([
  'angular',
  'angularRoute',
  'angularAnimate',
  'uiBoot'
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

    $scope.myInterval = 0;
    $scope.slides = [
      {
        url: 'partials/intro.html'
      },
      {
        url: 'partials/about.html'
      },
      {
        url: 'partials/projects.html'
      }
    ];
       
    $(document).ready(function (){
      $('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
    });
  
  }]);
});
