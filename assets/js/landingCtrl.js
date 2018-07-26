app.controller("landingCtrl", function ($scope, Facebook) {

    $scope.login = function() {
    	Facebook.logIn(FB);	
    	console.log("facebook login")
    };

   
});