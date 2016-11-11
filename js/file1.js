

var app1 = angular.module('app1', []);


app1.controller('cntrl1', function($scope) {

   $scope.first = 1;
   $scope.second = 2 ;

   $scope.calculate = function() {

     $scope.third = $scope.first + $scope.second;
   }

});

app1.controller('cntrl2', function($scope) {

   $scope.first = 1;
   $scope.second = 2 ;

   $scope.calculate = function() {

     $scope.third = $scope.first + $scope.second;
   }

});

var s;
app1.controller('cntrl3', function($scope) {

  s =  $scope.number;

});
