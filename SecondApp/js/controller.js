

var myApp = angular.module("myApp",[]);

myApp.controller("myController",function ($scope) {
	$scope.name = "World";
	$scope.clickHandler = function() {
		// window.alert("Clicked!");
		$scope.isHidden = !$scope.isHidden;
	}

});