

var app1 = angular.module('app1', []);


app1.controller('cntrl1', function($scope) {

   $scope.first = 'Senthil';
   $scope.second = 'Kumar' ;

   $scope.calculate = function() {

     $scope.third = $scope.first + $scope.second;

   }

});

app1.controller('cntrl2', function($scope) {

   $scope.firstvalue = 1;
   $scope.secondvalue = 2 ;

   $scope.calculate = function() {

     $scope.third = $scope.first + $scope.second;
   }

});

var s;
app1.controller('cntrl3', function($scope) {

  s =  $scope.number;

});

app1.controller('cntrl4', function($scope) {

  $scope.books = [
      {"name": "book1", "price" : 100},
      {"name": "book2", "price" : 20},
      {"name": "book3", "price" : 400},
      {"name": "book4", "price" : 120},
      {"name": "book5", "price" : 1200},
      {"name": "book6", "price" : 250}
    ];

  $scope.chosencolumn = 'price';
  $scope.changeOrder = function(orderString) {
      $scope.chosencolumn = orderString;

  }

});
