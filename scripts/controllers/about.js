'use strict';

/**
 * @ngdoc function
 * @name sportslifeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sportslifeApp
 */
angular.module('sportslifeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
