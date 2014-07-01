'use strict';

angular.module('kidsOnRobotsApp')
.controller('ScenarioCtrl', function ($scope, $document) {
  var main = null;

  $scope.init = function(){
    main = angular.element($document[0].querySelector('.main'));
    console.log('scenario');
  };


});
