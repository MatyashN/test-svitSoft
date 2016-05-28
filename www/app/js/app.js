'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'ctrl'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/page-1', {
    templateUrl: 'views/view1.html',
  });
  $routeProvider.when('/page-2', {
    templateUrl: 'views/view2.html',
  });
  $routeProvider.when('/page-3', {
    templateUrl: 'views/view3.html',
  });
  $routeProvider.otherwise({
    redirectTo : '/page-1'
  });
}]);