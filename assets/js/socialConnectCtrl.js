app.controller("socialConnectCtrl", function($scope,facebookService,$location) {
	$scope.facebook_login = function() {
    	facebookService.logIn(FB);
    	$location.path('/social-channel-list/');



    };

    $scope.facebook_logout = function(){
    	facebookService.logOut(FB);
    };
});