'use strict';

angular.module('kidsOnRobotsApp')
.controller('ScenarioCtrl', function ($scope, $document, $timeout) {
  var main = null;
  $scope.slots  = [1, 2, 3];
  $scope.blocks = [1, 2, 3, 4];

  $scope.init = function(){
    main = angular.element($document[0].querySelector('.main'));
    $timeout(function () {
      $scope.activateSlots();
      $scope.activateBlocks();
    });
  };

  $scope.activateBlocks = function(){
    var dragOptions = {
      containment: '.workplace',
      stack: '.workplace',
      cursor: 'move',
      zIndex: 1,
      revert: true
    };

    _.each($scope.blocks, function(block){
      main.find('.block-'+block).draggable(dragOptions);
    });
  };

  $scope.activateSlots = function(){
    var dropOptions = {
      drop: $scope.handleDrop
    };

    _.each($scope.slots, function(slot){
      main.find('.slot'+slot).droppable(dropOptions);
    });
  };

  $scope.handleDrop = function(event, ui){
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
    ui.draggable.draggable( 'option', 'revert', false );

    if(data.type === ui.draggable.data('type')){ answers++; }
  };


});
