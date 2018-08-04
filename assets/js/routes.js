app.config(
	function($routeProvider,$locationProvider){
		$routeProvider
		.when("/", { templateUrl : "landing.html"})
		.when("/social-connect/", {templateUrl : "social-connect.html", controller: "socialConnectCtrl"})
		.when("/social-channel-list", { templateUrl : "social-channels-list.html", controller: "socialChannelsCtrl"})

		$locationProvider.html5Mode(true);


		
	}
)