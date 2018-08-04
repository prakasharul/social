
app.service('facebookService', function($q, $rootScope, $location) {
    resolve = function(errval, retval, deferred) {
        $rootScope.$apply(function() {
            if (errval) {
                deferred.reject(errval);
            } else {
                retval.connected = true;
                deferred.resolve(retval);
            }
        });
    }

    var APP_ID = '120828908565639'
    var APP_SECRET = '7d79ba2e5428420b58e5a403e637e4e2'
    // var BASE_URL='http://localhost:8001/'
    var BASE_URL = 'https://social.codelife.in/'


    this.logIn = function(FB) {
            var deferred = $q.defer();
             FB.login(function(response) {

                // get auth status
                if (response.authResponse) {
                    var access = response.authResponse.accessToken;
                    
                    // extend access_token
                    FB.api('/oauth/access_token?grant_type=fb_exchange_token&client_id='+APP_ID+'&client_secret='+APP_SECRET+'&fb_exchange_token='+access,
                        function(response){
                            var access_token = response.access_token;

                            if (typeof(Storage) !== "undefined") {
                                localStorage.setItem("fb_user_access_token", access_token);
                                console.log(localStorage.getItem("fb_user_access_token"));
                                $location.path('/social-channel-list/');

                            } else {
                                console.log("Sorry! No Web Storage support..");
                            }
                    });

                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },{
                scope: 'publish_pages, manage_pages, email, user_likes,user_events, user_photos, user_posts, user_friends, user_location, business_management',
                return_scopes: true,
                auth_type: 'reauthenticate'
            });
             return status
    },
    this.fbAccounts = function (FB, access_token) {
        var deferred = $q.defer();  
        FB.api('me?fields=id,name,accounts{category,picture{url},name,access_token,about}&access_token='+access_token,function (response) {
              // console.log(response);
             var  accounts = response
             return accounts
        });
        
    }


    // return {
    //     logIn: function(FB) {
    //         var deferred = $q.defer();
    //          FB.login(function(response) {

    //             // get auth status
    //             if (response.authResponse) {
    //                 var access = response.authResponse.accessToken;
                    
    //                 // extend access_token
    //                 FB.api('/oauth/access_token?grant_type=fb_exchange_token&client_id='+APP_ID+'&client_secret='+APP_SECRET+'&fb_exchange_token='+access,
    //                     function(response){
    //                         var access_token = response.access_token;

    //                         if (typeof(Storage) !== "undefined") {
    //                             localStorage.setItem("fb_user_access_token", access_token);
    //                             console.log(localStorage.getItem("fb_user_access_token"));

    //                         } else {
    //                             console.log("Sorry! No Web Storage support..");
    //                         }
    //                 });

    //             } else {
    //                 console.log('User cancelled login or did not fully authorize.');
    //             }
    //         },{
    //             scope: 'publish_pages, manage_pages, email, user_likes,user_events, user_photos, user_posts, user_friends, user_location, business_management',
    //             return_scopes: true,
    //             auth_type: 'reauthenticate'
    //         });
    //          return status
    //     },

    //     logOut: function(FB) {
    //         var deferred = $q.defer();
    //          FB.logout(function(response) {
    //             var status = response;
    //             console.log(response);
    //         });
    //          return status
    //     },

    //     fbAccounts: function (FB, access_token) {
    //         var deferred = $q.defer();  
    //         FB.api('me?fields=id,name,accounts&access_token='+access_token, function (response) {
    //               console.log(response);
    //               accounts = response
    //         });
    //       return accounts
    //     },

    //     redirect : function(location){
    //         window.location = BASE_URL+location;
    //         window.location.reload();
    //     }

    // };
});