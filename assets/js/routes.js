app.config(
	function($routeProvider){
		$routeProvider
		.when("/", { templateUrl : "landing.html"})
		.when("/social-connect/", {templateUrl : "social-connect.html", controller: "socialConnectCtrl"})
		.when("/social-channel-list", { templateUrl : "social-channels-list.html", controller: "socialChannelsCtrl"})
		
	}
)