app.controller("socialConnectCtrl", function($scope,facebookService) {
$scope.facebook_login = function() {
    	$scope.status = facebookService.logIn(FB);	
    	console.log($scope.status);
    };

    $scope.facebook_logout = function(){
    	facebookService.logOut(FB);
    };
});