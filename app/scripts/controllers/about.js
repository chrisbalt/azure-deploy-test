'use strict';

/**
 * @ngdoc function
 * @name azureDeployTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the azureDeployTestApp
 */
angular.module('azureDeployTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
