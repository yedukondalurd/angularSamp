angular.module('ngBoilerplate')
    .factory('authFactory', function ($http, sessionService, AUTH_EVENTS) {
        var authFactory = {};

        authFactory.login = function (credentials) {
            return $http
                .post('http://localhost/angularSamp/data.php', credentials)
                .then(function (res) {
                    sessionService.create(res.data.user,
                        res.data.role);
                    return res.data;
                });
        };
        authFactory.checkSession = function (authorizedRoles) {
            /*if (isAuthenticated()) {
             if (isAuthorized(authorizedRoles)) {

             }
             }*/
            return AUTH_EVENTS.sessionTimeout;
        };
        authFactory.checkAuth = function (authorizedRoles) {
            /*if (isAuthenticated()) {
                if (isAuthorized(authorizedRoles)) {

                }
            }*/
            return true;
        };
        function isAuthenticated() {
            return true;
        };

        function isAuthorized(authorizedRoles) {
            if (angular.isArray(authorizedRoles)) {
                return (authorizedRoles.indexOf(sessionService.userRole) !== -1);
            }
        };

        return authFactory;
    });