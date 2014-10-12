'use strict';

/**
 * @ngdoc function
 * @name azureDeployTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the azureDeployTestApp
 */
angular.module('azureDeployTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
