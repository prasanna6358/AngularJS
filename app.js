var app = angular.module("myApp",[]);
app.factory("MathCalculate", function(){
    var calc= [];
    calc.sum = function(x,y){
        return x+y
    }
    calc.minus = function(x,y){
        return x-y;
    }
    calc.mul = function(x,y){
        return x*y
    }
    calc.div = function(x,y){
        return x/y;
    }
    return calc;
});   

app.controller('myCtrl', function($scope,MathCalculate) {  
    $scope.firstName = "Prasanna Kumar";  
    $scope.lastName = "Billa";
    $scope.addition = function(){
        $scope.result = MathCalculate.sum(parseInt($scope.x), parseInt($scope.y));
    }
    $scope.subtraction = function(){
        $scope.result = MathCalculate.minus(parseInt($scope.x), parseInt($scope.y));
    }
    $scope.multiply = function(){
        $scope.result = MathCalculate.mul(parseInt($scope.x), parseInt($scope.y));
    }
    $scope.division = function(){
        $scope.result = MathCalculate.div(parseInt($scope.x), parseInt($scope.y));
    }
    });
