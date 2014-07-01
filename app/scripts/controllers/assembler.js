'use strict';

angular.module('kidsOnRobotsApp')
.controller('assemblerCtrl', function ($scope, $document, $window) {
  var TOTAL_ANSWERS = 4;

  var answers = 0;
  var main = null;
  var lightSensor = null;
  var nxt = null;
  var wheel1 = null;
  var wheel2 = null;
  var sensorReceiver = null;
  var nxtReceiver = null;
  var wheel1Receiver = null;
  var wheel2Receiver = null;

  $scope.ok = false;

  $scope.init = function(){
    main = angular.element($document[0].querySelector('.main'));
    $scope.activateSensors();
    $scope.activateReceivers();
  };

  $scope.activateSensors = function(){
    lightSensor = main.find('#light-sensor').data('type', 'sensor');
    nxt = main.find('#nxt').data('type', 'module');
    wheel1 = main.find('#wheel-1').data('type', 'wheel');
    wheel2 = main.find('#wheel-2').data('type', 'wheel');

    var dragOptions = {
      containment: '.workplace',
      stack: '.workspace',
      cursor: 'move',
      zIndex: 1,
      revert: true
    };

    lightSensor.draggable(dragOptions);
    nxt.draggable(dragOptions);
    wheel1.draggable(dragOptions);
    wheel2.draggable(dragOptions);
  };

  $scope.activateReceivers = function(){
    sensorReceiver = main.find('#sensor-shape');
    nxtReceiver= main.find('#nxt-shape');
    wheel1Receiver = main.find('#wheel-1-shape');
    wheel2Receiver = main.find('#wheel-2-shape').data('type', 'wheel');

    var dropOptions = {
      drop: $scope.handleDrop
    };

    sensorReceiver.droppable(dropOptions).data('data', { position: 'center', type: 'sensor'});
    nxtReceiver.droppable(dropOptions).data('data', { position: 'center', type: 'module'});
    wheel1Receiver.droppable(dropOptions).data('data', { position: 'left', type: 'wheel'});
    wheel2Receiver.droppable(dropOptions).data('data', { position: 'right', type: 'wheel'});
  }

  $scope.handleDrop = function(event, ui){
    var data = $(this).data('data');
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: data.position+' top', at: data.position+' top' } );
    ui.draggable.draggable( 'option', 'revert', false );

    if(data.type === ui.draggable.data('type')){ answers++; }
  };

  $scope.checkAnswers = function(receiver, object){
    if(answers === TOTAL_ANSWERS){ $scope.ok = true; }
  };

  $scope.resetGame = function(){
    $window.location.pathname = '/';
  }

});
