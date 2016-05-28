'use strict';

var ctrl = angular.module('ctrl', []);

ctrl.controller("mainCtrl", ["$scope", function($scope){
      
  $scope.tasks = todoModel.data;
  $scope.addTask = todoModel.addItem;
  $scope.statusBtn = true;
  $scope.removeTask = todoModel.removeItem;
  $scope.updateTask = todoModel.updateItem;
  $scope.save = todoModel.save;

  $scope.$watch('tasks' , function(){
    $scope.save();
  }, true)

  $scope.cleanForm = function(){
    $scope.name = undefined;
    $scope.desc = undefined;
    $scope.date = undefined;
    $scope.completed = false;
  };

  $scope.editTask = function(id){
    $scope.tasks.forEach(function(e,index){
      if (e.id == id){
        $scope.name = e.name;
        $scope.desc = e.description;
        $scope.date = e.duedate;
        $scope.completed = e.completed;
        $scope.id = e.id;
      }
    })
    $scope.statusBtn = false;
  };

  $scope.minlength = 3;
  
}]);