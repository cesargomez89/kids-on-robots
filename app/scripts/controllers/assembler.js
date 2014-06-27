'use strict';

angular.module('kidsOnRobotsApp')
.controller('assemblerCtrl', function ($scope, $document) {
  var main = null;
  var lightSensor = null;
  var motor = null;
  var nxt = null;
  var wheels = null;

  $scope.init = function(){
    main = angular.element($document[0].querySelector('.main'));
    $scope.activateSensors();
  };

  $scope.activateSensors = function(){
    lightSensor = main.find('#light-sensor');
    motor = main.find('#motor');
    nxt = main.find('#nxt');
    wheels = main.find('#wheels');

    var options = {
      stack: '.workplace',
      cursor: 'move',
      revert: true
    };

    lightSensor.draggable(options);
    motor.draggable(options);
    nxt.draggable(options);
    wheels.draggable(options);
  };
});
