angular.module("userProfiles").controller("userProfiles").controller("mainController", function($scope, mainService){

	$scope.users = mainService.getUsers();

	
});