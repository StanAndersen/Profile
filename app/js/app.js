'use strict';

/* App Module */

var homePageApp = angular.module('homePageApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'principlecatAnimations',
  'principlecatControllers',
  'principlecatServices',
  'principlecatFilters'
]);

homePageApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/principles', {
        templateUrl: 'partials/principle-list.html',
        controller: 'PrincipleListCtrl'
      }).
      when('/principles/:principleId', {
        templateUrl: 'partials/principle-detail.html',
        controller: 'PrincipleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/principles'
      })
      ;
  }]);
