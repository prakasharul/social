
app.service('facebookService', function($q, $rootScope) {
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



    return {
        logIn: function(FB) {
            var deferred = $q.defer();
             FB.login(function(response) {
                var status = response;
                console.log(response);
                if (response.authResponse) {
                    var access_token = response.authResponse.accessToken;
                    console.log(access_token);

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

        logOut: function(FB) {
            var deferred = $q.defer();
             FB.logout(function(response) {
                var status = response;
                console.log(response);
            });
             return status
        },

        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    };
});