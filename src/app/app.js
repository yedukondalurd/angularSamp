angular.module('ngBoilerplate', [
        'ngBoilerplate.home',
        'ngBoilerplate.login',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');
    })
    .run(function ($rootScope, AUTH_EVENTS, authFactory) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            var authorizedRoles = next.data.authorizedRoles;
            switch (authFactory.checkAuth(authorizedRoles)) {
                case AUTH_EVENTS.notAuthenticated:
                    event.preventDefault();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                    break;
                case AUTH_EVENTS.notAuthorized:
                    event.preventDefault();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                    break;
                case AUTH_EVENTS.sessionTimeout:
                    event.preventDefault();
                    $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout);
                    break;
            }
        });
    })
    .controller('AppCtrl', function ($scope) {
        $scope.currentUser = null;
        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
            }
        });
    });


