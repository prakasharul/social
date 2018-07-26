app.controller("app.ctrl.landing", function ($scope, Facebook) {

    // $scope.user = Facebook.getUser(FB);


    $scope.login = function() {
    	Facebook.getUser(FB);	
    }
   
});