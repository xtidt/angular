var app = angular.module('app', []);
app.controller('myController', function($scope) {
	$scope.msg = "Hello angular";
});

app.controller('nextCtrl', function($scope) {
	$scope.msg = 'testests'
})