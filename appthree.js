var app = angular.module("myApp",[]);
app.service("MathCalculate", function(){
    this.sum = function(x,y){
        return x+y
    }
    this.minus = function(x,y){
        return x-y;
    }
    this.mul = function(x,y){
        return x*y;
    }
    this.div = function(x,y){
        return x/y;
    }
});   

app.controller('myCtrl', function($scope,MathCalculate) {  
    $scope.firstName = "Prasanna Kumar";  
    $scope.lastName = "Billa";
    $scope.show=false;
    $scope.checkEmpty = function(){
        if($scope.option!=null){
            //do nothing
        }
        else $scope.show=true;
    }
    $scope.getResult = function(){
        $scope.checkEmpty();
        switch($scope.option){
        case '+' :
            $scope.result = MathCalculate.sum(parseInt($scope.x), parseInt($scope.y));
            break;
        case '-' :
            $scope.result = MathCalculate.minus(parseInt($scope.x), parseInt($scope.y));
            break;
        case '*' :
            $scope.result = MathCalculate.mul(parseInt($scope.x), parseInt($scope.y));
            break;
        case '/' :
            $scope.result = MathCalculate.div(parseInt($scope.x), parseInt($scope.y));
            break;  
        }
    }
});
