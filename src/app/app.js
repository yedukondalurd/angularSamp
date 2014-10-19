angular.module('ngBoilerplate', [
        'ngBoilerplate.home',
        'ngBoilerplate.login',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
    })
    .run(function run() {
    })
    .controller('AppCtrl', function($scope, $location) {
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
            }
        });
    });


