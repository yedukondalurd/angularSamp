angular.module('ngBoilerplate.home', [
        'ui.router'
    ])
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'homeCtrl',
                    templateUrl: 'app/home/home.tpl.html'
                }
            },
            data: { pageTitle: 'Home' }
        });
    })
    .controller('homeCtrl', function ($scope) {
    });

