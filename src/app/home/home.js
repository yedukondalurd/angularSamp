angular.module('ngBoilerplate.home', [
        'ui.router'
    ])
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'app/home/home.tpl.html'
                }
            },
            data: { pageTitle: 'Home' }
        });
    })
    .controller('HomeCtrl', function ($scope) {
    });

