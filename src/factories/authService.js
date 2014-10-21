angular.module('ngBoilerplate')
    .factory('AuthService', function ($http, Session) {
        var authService = {};

        authService.login = function (credentials) {
            return $http
                .post('http://localhost/angularSamp/data.php', credentials)
                .then(function (res) {
                    console.log(res);
                    Session.create(res.data.user,
                        res.data.role);
                    return res.data;
                });
        };

        authService.isAuthenticated = function () {
            return !!Session.userId;
        };

        authService.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        return authService;
    });