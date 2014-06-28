'use strict';

angular.module('kidsOnRobotsApp')
.controller('ScenarioCtrl', function ($scope, $document) {

  $scope.init = function(){
    main = angular.element($document[0].querySelector('.main'));
    console.log('scenario');
  };


});
