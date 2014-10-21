angular.module('ngBoilerplate.login', [
        'ui.router'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'loginCtrl',
                    templateUrl: 'app/login/login.tpl.html'
                }
            },
            data: { pageTitle: 'Login' }
        });
    })
    .controller('loginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (data) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(data.user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    });

