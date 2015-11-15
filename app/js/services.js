'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

var principlecatServices = angular.module('principlecatServices', ['ngResource']);

principlecatServices.factory('Principle', ['$resource',
  function($resource){
    return $resource('principles/:principleId.json', {}, {
      query: {method:'GET', params:{principleId:'principles'}, isArray:true}
    });
  }]);