'use strict';

angular.module('kidsOnRobotsApp')
.controller('assemblerCtrl', function ($scope, $document) {
  var main = null;
  var lightSensor = null;
  var nxt = null;
  var wheel1 = null;
  var wheel2 = null;
  var sensorReceiver = null;
  var nxtReceiver = null;
  var wheel1Receiver = null;
  var wheel2Receiver = null;

  $scope.init = function(){
    main = angular.element($document[0].querySelector('.main'));
    $scope.activateSensors();
  };

  $scope.activateSensors = function(){
    lightSensor = main.find('#light-sensor');
    nxt = main.find('#nxt');
    wheel1 = main.find('#wheel-1');
    wheel2 = main.find('#wheel-2');

    sensorReceiver = main.find('#sensor-shape');
    nxtReceiver= main.find('#nxt-shape');
    wheel1Receiver = main.find('#wheel-1-shape');
    wheel2Receiver = main.find('#wheel-2-shape');

    var dragOptions = {
      cursor: 'move',
      revert: true
    };

    var dropOptions = {
      drop: $scope.handleDrop
    };

    lightSensor.draggable(dragOptions);
    nxt.draggable(dragOptions);
    wheel1.draggable(dragOptions);
    wheel2.draggable(dragOptions);

    sensorReceiver.droppable(dropOptions).data('position', 'center');
    nxtReceiver.droppable(dropOptions).data('position', 'center');
    wheel1Receiver.droppable(dropOptions).data('position', 'left');
    wheel2Receiver.droppable(dropOptions).data('position', 'right');
  };

  $scope.handleDrop = function(event, ui){
    var position = $(this).data('position');
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: position+' top', at: position+' top' } );
    ui.draggable.draggable( 'option', 'revert', false );
  }

});
