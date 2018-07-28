app.controller("landingCtrl", function ($scope, Facebook) {

    $scope.login = function() {
    	$scope.status = Facebook.logIn(FB);	
    	console.log($scope.status);
    };

    $scope.logout = function(){
    	Facebook.logOut(FB);
    };

   
});