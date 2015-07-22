angular.module("userProfiles").controller("mainController", function($scope, mainService){

	$scope.users = mainService.getUsers();

	
});