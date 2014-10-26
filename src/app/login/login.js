angular.module('ngBoilerplate.login', [
        'ngBoilerplate.home',
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
            data: {
                pageTitle: 'Login'
            }
        });
    })
    .controller('loginCtrl', function ($scope, $rootScope, $location, AUTH_EVENTS, authFactory) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.login = function (credentials) {
            authFactory.login(credentials).then(function (data) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(data);
                $location.path('/home');
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    });

