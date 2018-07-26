
app.service('Facebook', function($q, $rootScope) {
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
                if (response.authResponse) {
                    FB.getLoginStatus(function(response) {
                        var access_token = response.authResponse.accessToken;
                        console.log(access_token);
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },{
                scope: 'publish_actions, email, user_likes,user_events, user_photos, user_posts, user_friends, user_location, business_management',
                return_scopes: true,
                auth_type: 'reauthenticate'
            });
        }
    };
    return {
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

    return {
        fbLogin: function(FB) {
            FB.login(function(response) {
                if (response.authResponse) {
                    FB.getLoginStatus(function(response) {
                        var access_token = response.authResponse.accessToken;
                        console.log(access_token);
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
            return access_token
        }
    };

});