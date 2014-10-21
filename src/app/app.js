angular.module('ngBoilerplate', [
        'ngBoilerplate.home',
        'ngBoilerplate.login',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');
    })
    .run(function run() {
    })
    .controller('AppCtrl', function ($scope, $location, USER_ROLES, AuthService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
            }
        });
    });


