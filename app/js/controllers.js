'use strict';

/* Controllers */

var principlecatControllers = angular.module('principlecatControllers', []);

principlecatControllers.controller('PrincipleListCtrl', ['$scope', 'Principle',
  function($scope, Principle) {
    $scope.principles = Principle.query();
    $scope.orderProp = 'name';
  }]);

principlecatControllers.controller('PrincipleDetailCtrl', ['$scope', '$routeParams', 'Principle',
  function($scope, $routeParams, Principle) {
    $scope.principle = Principle.get({principleId: $routeParams.principleId}, function(principle) {
      $scope.mainImageUrl = principle.images[0];
    });

     $scope.setImage = function(imageUrl) {
       $scope.mainImageUrl = imageUrl;
     };
  }]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);




