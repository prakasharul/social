app.controller('socialChannelsCtrl', function($scope, facebookService) {
	
	access_token = localStorage.getItem("fb_user_access_token");
	$scope.accounts =facebookService.fbAccounts(FB,access_token);
	console.log($scope.accounts);
});