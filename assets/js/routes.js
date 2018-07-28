app.config(
	function($routeProvider){
		$routeProvider
		.when("/", { templateUrl : "landing.html", controller : "landingCtrl"})
	}
)