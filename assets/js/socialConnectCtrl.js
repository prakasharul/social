app.controller("socialConnectCtrl", function($scope,facebookService) {
$scope.facebook_login = function() {
    	$scope.status = facebookService.logIn(FB);	
    	// console.log(localStorage.getItem("fb_user_access_token"));
    };

    $scope.facebook_logout = function(){
    	facebookService.logOut(FB);
    };
});