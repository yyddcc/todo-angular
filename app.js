(function() {
  var app = angular.module('todoApp', []);

  app.controller('TodoCtrl', [ '$scope', function($scope) {
    $scope.todos = [];
    
    $scope.add = function() {
      if(event.keyCode == 13 && $scope.todoText){
        $scope.todos.push({text: $scope.todoText, done:false});
        $scope.todoText = '';
      }
    };

    $scope.delete = function(todo) {
      index = $scope.todos.indexOf(todo);
      $scope.todos.splice(index, 1);
    };
      
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        if (!todo.done) count += 1;
      });
      return count;
    };
    
    $scope.clear = function() {
      var temp = $scope.todos;
      $scope.todos = [];
      angular.forEach(temp, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }]);
})();
