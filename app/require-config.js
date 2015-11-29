require.config({
  paths: {
    angular: '../lib/bower_components/angular/angular',
    angularRoute: '../lib/bower_components/angular-route/angular-route',
    angularAnimate: '../lib/bower_components/angular-animate/angular-animate.min',
    jquery: '../lib/bower_components/jquery/dist/jquery.min',
    uiBoot: '../lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'angularAnimate': ['angular'],
    'uiBoot': ['angular']
  },
  priority: [
    "angular",
    "jquery"
  ]
});

require([
  'angular',
  'app',
  'jquery'
  ], function(angular, app, $) {

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      angular.bootstrap(document, ["JeremyGrondahl"]);
    }); 

  }
);